import { FieldApi, useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/lib/rpc";

export default function CreateExpense() {
    const form = useForm({
        defaultValues: {
            title: "",
            amount: 0,
        },
        onSubmit: async ({ value }) => {
            // TODO: Remove debug delay
            await new Promise((resolve) => setTimeout(resolve, 3000));

            const res = await api.expenses.$post({ json: value });
            if (!res.ok) {
                throw new Error("Failed to create expense");
            }
        },
        validatorAdapter: zodValidator,
    });

    return (
        <div className="grid place-items-center px-10">
            <form
                className="w-full flex flex-col gap-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <div>
                    <form.Field
                        name="title"
                        validatorAdapter={zodValidator}
                        validators={{
                            onChangeAsyncDebounceMs: 500,
                            onChangeAsync: async ({ value }) => {
                                await new Promise((resolve) => setTimeout(resolve, 1000));
                                return value.includes("error") && 'No "error" allowed in first name';
                            },
                        }}
                        children={(field) => {
                            return (
                                <>
                                    <Label htmlFor={field.name}>Title</Label>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldInfo field={field} />
                                </>
                            );
                        }}
                    />
                </div>
                <div>
                    <form.Field
                        name="amount"
                        validatorAdapter={zodValidator}
                        validators={{
                            onChangeAsyncDebounceMs: 500,
                        }}
                        children={(field) => {
                            return (
                                <>
                                    <Label htmlFor={field.name}>Amount</Label>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(Number(e.target.value))}
                                        type="number"
                                    />
                                    <FieldInfo field={field} />
                                </>
                            );
                        }}
                    />
                </div>
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmitting]) => (
                        <Button type="submit" variant={"foreground"} disabled={!canSubmit}>
                            {isSubmitting ? "..." : "Submit"}
                        </Button>
                    )}
                />
            </form>
        </div>
    );
}

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
        <>
            {field.state.meta.touchedErrors ? <em>{field.state.meta.touchedErrors}</em> : null}
            {field.state.meta.isValidating ? "Validating..." : null}
        </>
    );
}

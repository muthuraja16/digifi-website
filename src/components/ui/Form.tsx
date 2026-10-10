"use client";

import { ChevronDown, CircleAlert } from "lucide-react";
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  use,
  useId,
} from "react";

/*
 * Form controls. <FormField> renders the label, hint and error and wires their ids into the
 * control inside it (aria-describedby, aria-invalid), so a field is just:
 *
 *   <FormField label="Business name" error={errors.businessName}>
 *     <Input name="businessName" />
 *   </FormField>
 *
 * Errors: red (error / error-on-dark tokens) plus an icon, bold text and a 2px border, so an
 * error is never signalled by colour alone. Optional fields say "(optional)" in their label.
 */

type FieldContextValue = {
  id: string;
  describedBy?: string;
  invalid: boolean;
  required: boolean;
};

const FieldContext = createContext<FieldContextValue | null>(null);

function useField(id?: string) {
  const field = use(FieldContext);
  return {
    id: id ?? field?.id,
    "aria-describedby": field?.describedBy,
    "aria-invalid": field?.invalid || undefined,
    required: field?.required,
  };
}

function ErrorMessage({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p
      id={id}
      className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-error on-dark:text-error-on-dark"
    >
      <CircleAlert
        aria-hidden="true"
        strokeWidth={1.75}
        className="mt-px size-4 shrink-0"
      />
      {children}
    </p>
  );
}

export function FormField({
  label,
  hint,
  error,
  required = false,
  id: idProp,
  className = "",
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const autoId = useId();
  const id = idProp ?? autoId;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-[15px] font-semibold text-navy-900 on-dark:text-white"
      >
        {label}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-muted on-dark:text-on-dark">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">
        <FieldContext
          value={{ id, describedBy, invalid: Boolean(error), required }}
        >
          {children}
        </FieldContext>
      </div>
      {error && errorId ? (
        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      ) : null}
    </div>
  );
}

const control =
  "block w-full rounded-inner border border-border bg-white text-base text-navy-900 transition-colors duration-150 placeholder:text-muted hover:border-navy-900/30 focus-visible:border-blue-600 disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted aria-invalid:border-2 aria-invalid:border-error on-dark:border-white/15 on-dark:bg-navy-800 on-dark:text-white on-dark:scheme-dark on-dark:placeholder:text-on-dark on-dark:hover:border-white/35 on-dark:aria-invalid:border-error-on-dark";

export function Input({
  leading,
  className = "",
  id,
  ...props
}: ComponentProps<"input"> & {
  /** Fixed text before the value, e.g. "+91". */
  leading?: string;
}) {
  const field = useField(id);
  const input = (
    <input
      {...field}
      {...props}
      className={`${control} h-12 ${leading ? "pl-14" : "px-4"} pr-4 ${className}`}
    />
  );
  if (!leading) return input;
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 flex w-12 items-center justify-center border-r border-border metric-sm text-muted on-dark:border-white/15 on-dark:text-on-dark"
      >
        {leading}
      </span>
      {input}
    </div>
  );
}

export function Textarea({
  className = "",
  id,
  rows = 4,
  ...props
}: ComponentProps<"textarea">) {
  const field = useField(id);
  return (
    <textarea
      rows={rows}
      {...field}
      {...props}
      className={`${control} px-4 py-3 ${className}`}
    />
  );
}

export function Select({
  options,
  placeholder,
  className = "",
  id,
  ...props
}: ComponentProps<"select"> & {
  options: readonly string[] | readonly { value: string; label: string }[];
  /** First, empty option, e.g. "Choose a category". */
  placeholder?: string;
}) {
  const field = useField(id);
  return (
    <div className="relative">
      <select
        {...field}
        {...props}
        className={`${control} h-12 appearance-none pr-12 pl-4 ${className}`}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => {
          const { value, label } =
            typeof option === "string"
              ? { value: option, label: option }
              : option;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <ChevronDown
        aria-hidden="true"
        strokeWidth={1.75}
        className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-muted on-dark:text-on-dark"
      />
    </div>
  );
}

const choice =
  "mt-0.5 size-5 shrink-0 cursor-pointer accent-blue-600 disabled:cursor-not-allowed";

/** Checkbox with its own label (consent, service choices). */
export function Checkbox({
  label,
  hint,
  error,
  className = "",
  id: idProp,
  ...props
}: Omit<ComponentProps<"input">, "type"> & {
  label: ReactNode;
  hint?: string;
  error?: string;
}) {
  const autoId = useId();
  const id = idProp ?? autoId;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex min-h-11 cursor-pointer items-start gap-3 py-2 has-disabled:cursor-not-allowed has-disabled:opacity-60"
      >
        <input
          id={id}
          type="checkbox"
          aria-describedby={
            [hintId, errorId].filter(Boolean).join(" ") || undefined
          }
          aria-invalid={error ? true : undefined}
          className={choice}
          {...props}
        />
        <span className="text-[15px] text-navy-900 on-dark:text-white">
          {label}
          {hint ? (
            <span
              id={hintId}
              className="mt-0.5 block text-sm text-muted on-dark:text-on-dark"
            >
              {hint}
            </span>
          ) : null}
        </span>
      </label>
      {error && errorId ? (
        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      ) : null}
    </div>
  );
}

export type RadioOption = { value: string; label: string; hint?: string };

/** Radio buttons in a fieldset with a visible legend (quiz answers, single choices). */
export function RadioGroup({
  name,
  legend,
  options,
  hint,
  error,
  value,
  defaultValue,
  onChange,
  required,
  className = "",
}: {
  name: string;
  legend: ReactNode;
  options: readonly RadioOption[];
  hint?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  className?: string;
}) {
  const baseId = useId();
  const hintId = hint ? `${baseId}-hint` : undefined;
  const errorId = error ? `${baseId}-error` : undefined;
  return (
    <fieldset
      aria-describedby={
        [hintId, errorId].filter(Boolean).join(" ") || undefined
      }
      aria-invalid={error ? true : undefined}
      className={className}
    >
      <legend className="text-[15px] font-semibold text-navy-900 on-dark:text-white">
        {legend}
      </legend>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-muted on-dark:text-on-dark">
          {hint}
        </p>
      ) : null}
      <div className="mt-3 grid gap-2">
        {options.map((option) => {
          const optionId = `${baseId}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className="flex min-h-12 cursor-pointer items-start gap-3 rounded-inner border border-border bg-white px-4 py-3 transition-colors duration-150 hover:border-navy-900/30 has-checked:border-blue-600 has-checked:bg-blue-50 on-dark:border-white/15 on-dark:bg-navy-800 on-dark:hover:border-white/35 on-dark:has-checked:border-sky-300 on-dark:has-checked:bg-navy-800"
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                required={required}
                {...(value !== undefined
                  ? { checked: value === option.value }
                  : { defaultChecked: defaultValue === option.value })}
                onChange={(e) => onChange?.(e.target.value)}
                className={choice}
              />
              <span className="text-[15px] text-navy-900 on-dark:text-white">
                {option.label}
                {option.hint ? (
                  <span className="mt-0.5 block text-sm text-muted on-dark:text-on-dark">
                    {option.hint}
                  </span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {error && errorId ? (
        <ErrorMessage id={errorId}>{error}</ErrorMessage>
      ) : null}
    </fieldset>
  );
}

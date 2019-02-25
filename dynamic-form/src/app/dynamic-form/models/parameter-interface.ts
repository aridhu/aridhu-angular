export interface DynamicFormParameter {
    paramName: string;
    paramValue: any;
    displayComponent: DisplayComponent;
}

export interface DisplayComponent {
    paramType: string;
    placeholder: string;
    fieldLabel: string;
    hidden: boolean;
    readonly: boolean;
    minLength: number;
    maxLength: number;
    multiple: boolean;
}
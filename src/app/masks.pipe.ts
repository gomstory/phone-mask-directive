import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "masks",
  pure: true
})
export class MaskPipe implements PipeTransform {
  public transform(
    value: string | number,
    mask: string | [string],
    thousandSeparator: string | null = null
  ): string {
    console.log("control from pipe.ts", "masks");

    if (!value && typeof value !== "number") {
      return "";
    }

    return "1234";
  }
}

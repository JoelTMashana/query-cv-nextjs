import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select an industry" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
          <SelectLabel>Industries</SelectLabel>
          <SelectItem value="technology">Technology</SelectItem>
          <SelectItem value="healthcare">Healthcare</SelectItem>
          <SelectItem value="finance">Finance</SelectItem>
          <SelectItem value="manufacturing">Manufacturing</SelectItem>
          <SelectItem value="education">Education</SelectItem>
          <SelectItem value="retail">Retail</SelectItem>
          <SelectItem value="hospitality">Hospitality</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

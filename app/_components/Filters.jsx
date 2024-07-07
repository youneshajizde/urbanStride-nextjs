import React from "react";
import Image from "next/image";
import nike from "../_images/nike.png";
import adidas from "../_images/ad.png";
import newbalance from "../_images/nb.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
function Filters() {
  return (
    <div className="filters flex items-center gap-2 bg-white border-2 rounded-full max-w-[500px] h-16 mx-auto mt-7 p-3 ">
      <Select>
        <SelectTrigger className="w-[170px] rounded-full bg-gray-200 font-semibold">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <div className="flex items-center gap-1">
              <Image width={0} height={0} src={nike} className="w-6" />
              <span>Nike</span>
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-1">
              <Image width={0} height={0} src={newbalance} className="w-6" />
              <span>Balance</span>
            </div>
          </SelectItem>
          <SelectItem value="system">
            <div className="flex items-center gap-1">
              <Image width={0} height={0} src={adidas} className="w-6" />
              <span>Adidas</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[120px] rounded-full bg-gray-200">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Lowest">Lowest</SelectItem>
          <SelectItem value="Mid">Mid</SelectItem>
          <SelectItem value="Highest">Highest</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[120px] rounded-full bg-gray-200">
          <SelectValue placeholder="Sizes" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="37">37</SelectItem>
          <SelectItem value="38">38</SelectItem>
          <SelectItem value="39">39</SelectItem>
          <SelectItem value="40">40</SelectItem>
          <SelectItem value="41">41</SelectItem>
          <SelectItem value="42">42</SelectItem>
          <SelectItem value="43">43</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild className="bg-gray-200 rounded-full">
          <Button
            variant="outline"
            className="flex items-center gap-1 rounded-full"
          >
            More Filters{" "}
            <SlidersHorizontal className="font-semibold w-4 text-gray-700" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <h6 className="text-sm font-semibold mb-2">Choose a color</h6>

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="white" id="option-one" />
              <Label htmlFor="white">White</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="black" id="option-two" />
              <Label htmlFor="black">Black</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="green" id="option-two" />
              <Label htmlFor="green">Green</Label>
            </div>
          </RadioGroup>

          <h6 className="text-sm font-semibold mb-2 mt-4">Choose a Group</h6>

          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="option-one" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="woman" id="option-two" />
              <Label htmlFor="woman">Woman</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kids" id="option-two" />
              <Label htmlFor="kids">Kids</Label>
            </div>
          </RadioGroup>
          <Button className="mt-5">Apply</Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Filters;

{
  /* <div className="grid gap-4">
<div className="space-y-2">
  <h4 className="font-medium leading-none">Dimensions</h4>
  <p className="text-sm text-muted-foreground">
    Set the dimensions for the layer.
  </p>
</div>
<div className="grid gap-2">
  <div className="grid grid-cols-3 items-center gap-4">
    <Input
      id="width"
      defaultValue="100%"
      className="col-span-2 h-8"
    />
  </div>
  <div className="grid grid-cols-3 items-center gap-4">
    <Input
      id="maxWidth"
      defaultValue="300px"
      className="col-span-2 h-8"
    />
  </div>
  <div className="grid grid-cols-3 items-center gap-4">
    <Input
      id="height"
      defaultValue="25px"
      className="col-span-2 h-8"
    />
  </div>
  <div className="grid grid-cols-3 items-center gap-4">
    <Input
      id="maxHeight"
      defaultValue="none"
      className="col-span-2 h-8"
    />
  </div>
</div>
</div> */
}

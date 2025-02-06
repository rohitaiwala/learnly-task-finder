import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";

interface AcademicInfoFieldsProps {
  form: UseFormReturn<any>;
}

export const AcademicInfoFields = ({ form }: AcademicInfoFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="qualification"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Qualification</FormLabel>
            <FormControl>
              <Input placeholder="Your highest qualification" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Role</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="tutor">Tutor</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="institutionName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>School/College Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your institution name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="preferredSubject"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Subject</FormLabel>
            <FormControl>
              <Input placeholder="Enter your preferred subject" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter your location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
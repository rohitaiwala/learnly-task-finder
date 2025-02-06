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
            <FormLabel className="text-gray-600">Qualification</FormLabel>
            <FormControl>
              <Input 
                placeholder="Your highest qualification" 
                className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]" 
                {...field} 
              />
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
            <FormLabel className="text-gray-600">Role</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]">
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
            <FormLabel className="text-gray-600">School/College Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your institution name" 
                className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]" 
                {...field} 
              />
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
            <FormLabel className="text-gray-600">Preferred Subject</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your preferred subject" 
                className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]" 
                {...field} 
              />
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
            <FormLabel className="text-gray-600">Location</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your location" 
                className="rounded-xl border-gray-200 focus:border-[#1EAEDB] focus:ring-[#1EAEDB]" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
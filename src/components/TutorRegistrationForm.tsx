import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  qualification: z.string().min(2, "Please enter your qualification"),
  subjects: z.string().min(2, "Please enter subjects you can teach"),
  preferredClasses: z.string().min(1, "Please select preferred classes"),
  board: z.string().min(2, "Please enter the board"),
  location: z.string().min(2, "Please enter your location"),
});

export const TutorRegistrationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      qualification: "",
      subjects: "",
      preferredClasses: "",
      board: "",
      location: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically make an API call to register the tutor
      console.log(values);
      toast({
        title: "Registration successful!",
        description: "You will receive an email with the qualification test details.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          name="subjects"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subjects</FormLabel>
              <FormControl>
                <Input placeholder="Subjects you can teach" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredClasses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Classes</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select classes" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="9-10">Class 9-10</SelectItem>
                  <SelectItem value="11-12">Class 11-12</SelectItem>
                  <SelectItem value="ug">Undergraduate</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="board"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Board</FormLabel>
              <FormControl>
                <Input placeholder="Educational board" {...field} />
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
                <Input placeholder="Your location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Register as Tutor</Button>
      </form>
    </Form>
  );
};
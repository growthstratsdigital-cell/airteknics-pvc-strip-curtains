import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Building2, User, Phone, Mail, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { COMPANY_INFO, type LeadFormData } from "@/lib/index";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid business email." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Company name is required." }),
  industry: z.string().min(1, { message: "Please select your industry." }),
  requirement: z.string().min(10, { message: "Please describe your requirements in more detail." }),
  city: z.string().min(2, { message: "City is required." }),
});

interface LeadFormProps {
  className?: string;
}

export function LeadForm({ className }: LeadFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "none",
      requirement: "",
      city: "Bangalore",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call for lead generation
    console.log("Lead Form Submission:", values);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success("Quote request sent successfully!", {
          description: "Our technical expert will contact you within 24 hours.",
        });
        form.reset({
          name: "",
          email: "",
          phone: "",
          company: "",
          industry: "none",
          requirement: "",
          city: "Bangalore",
        });
        resolve(true);
      }, 1500);
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("w-full max-w-2xl mx-auto", className)}
    >
      <Card className="border-2 border-primary/10 shadow-xl overflow-hidden">
        <div className="h-2 bg-primary w-full" />
        <CardHeader className="space-y-1 bg-muted/30 p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Get a Custom Quote
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm sm:text-base">
            Fill out the form below to receive a professional consultation and pricing for PVC Strip Curtains in Bangalore.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                        <User className="w-4 h-4 text-primary" /> Contact Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Rahul Sharma" {...field} className="bg-background h-10 sm:h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                        <Building2 className="w-4 h-4 text-primary" /> Company Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Karnataka Logistics Ltd" {...field} className="bg-background h-10 sm:h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                        <Mail className="w-4 h-4 text-primary" /> Business Email
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="name@company.com" {...field} className="bg-background h-10 sm:h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                        <Phone className="w-4 h-4 text-primary" /> Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} className="bg-background h-10 sm:h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                        <Briefcase className="w-4 h-4 text-primary" /> Industry
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-background h-10 sm:h-11">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">Select Industry</SelectItem>
                          {COMPANY_INFO.industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm sm:text-base">
                        <MapPin className="w-4 h-4 text-primary" /> Installation City
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Bangalore" {...field} className="bg-background h-10 sm:h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="requirement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Specific Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your door dimensions, environmental factors (cold storage, dust control), and quantity needed..."
                        className="min-h-[100px] sm:min-h-[120px] bg-background resize-none text-sm sm:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 rounded-xl"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing Request...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Request Professional Quote
                  </div>
                )}
              </Button>

              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 px-2">
                By submitting this form, you agree to our privacy policy. 
                We usually respond to B2B inquiries within 1 business day.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

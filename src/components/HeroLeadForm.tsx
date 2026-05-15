import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, User, Phone, Mail, Building2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  company: z.string().min(2, {
    message: "Company name is required."
  }),
  message: z.string().min(10, {
    message: "Please describe your requirements."
  })
});
interface HeroLeadFormProps {
  className?: string;
}
export function HeroLeadForm({
  className
}: HeroLeadFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    }
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Hero Lead Form Submission:", values);
    return new Promise(resolve => {
      setTimeout(() => {
        toast.success("Quote request sent successfully!", {
          description: "Our team will contact you within 2 hours."
        });
        form.reset();
        resolve(true);
      }, 1500);
    });
  }
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: 0.3
  }} className={cn("w-full", className)}>
      <Card className="border-2 border-primary/20 shadow-2xl bg-card/95 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl sm:text-2xl font-bold text-center text-primary">
            Get Instant Quote
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-primary" /> Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="h-10 sm:h-11 bg-background/80" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} className="h-10 sm:h-11 bg-background/80" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" /> Phone
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} className="h-10 sm:h-11 bg-background/80" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="company" render={({
                field
              }) => <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm">
                        <Building2 className="w-4 h-4 text-primary" /> Company
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Company name" {...field} className="h-10 sm:h-11 bg-background/80" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>

              <FormField control={form.control} name="message" render={({
              field
            }) => <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm">
                      <MessageSquare className="w-4 h-4 text-primary" /> Requirements
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your PVC curtain requirements, dimensions, and application..." className="min-h-[80px] bg-background/80 resize-none text-sm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <Button type="submit" className="w-full h-11 sm:h-12 text-base font-semibold bg-primary hover:bg-primary/90 transition-all shadow-lg rounded-xl" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div> : <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Get Free Quote
                  </div>}
              </Button>

              <p className="text-center text-xs text-muted-foreground">✓ Free consultation • ✓ Same-day response • ✓ Best prices across Karnataka</p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>;
}
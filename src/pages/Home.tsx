import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Thermometer, ShieldCheck, Zap, Factory, ShoppingCart, Pill, Hotel, Warehouse, Phone, Mail, MapPin, ArrowRight, Quote, MessageCircle, Volume2, Shield, Gauge, ArrowRightLeft, Search, ClipboardCheck, Wrench, Headphones, Users } from "lucide-react";
import { IMAGES } from "@/assets/images";
import { COMPANY_INFO, scrollToSection, formatPhoneForLink, formatWhatsAppLink } from "@/lib/index";
import { HeroLeadForm } from "@/components/HeroLeadForm";
import { SlidingSpecCards } from "@/components/SlidingSpecCards";
import { HorizontalSpecCards } from "@/components/HorizontalSpecCards";
import { SingleLineSpecs } from "@/components/SingleLineSpecs";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};
export default function Home() {
  return <div className="flex flex-col min-h-screen relative">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <img 
                src={IMAGES.SCREENSHOT4568_36} 
                alt="Airteknics Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center">
              <Button 
                variant="outline"
                onClick={() => window.location.href = formatPhoneForLink(COMPANY_INFO.phone)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <div className="flex gap-2">
          <Button onClick={() => scrollToSection("hero")} className="flex-1 h-14 text-base font-semibold bg-primary hover:bg-primary/90 shadow-2xl rounded-2xl border-2 border-white/20">
            <Phone className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
          <Button onClick={() => window.open(formatWhatsAppLink(COMPANY_INFO.whatsapp, "Hi, I'm interested in PVC Strip Curtains for my business in Karnataka. Please send me a quote."), '_blank')} className="h-14 px-4 bg-green-500 hover:bg-green-600 shadow-2xl rounded-2xl border-2 border-white/20">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center pt-20 sm:pt-24 lg:pt-28 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.INDUSTRIAL_INTERIOR_1} alt="Industrial Facility" className="w-full h-full object-cover opacity-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start lg:items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={springTransition}>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5 px-3 py-1 text-xs sm:text-sm">
                #1 PVC Curtain Dealer in Karnataka
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 leading-[1.1] xl:text-4xl text-left">
                Premium PVC Strip Curtains for <span className="text-primary">Industrial Efficiency</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg">
                Customized thermal barriers and dust control solutions for Karnataka's leading warehouses,
                factories, and cold storage facilities.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {COMPANY_INFO.keyBenefits.map((benefit, idx) => <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                    {benefit === "Energy Efficiency" && <Gauge className="h-4 w-4 text-primary" />}
                    {benefit === "Contamination Control" && <Shield className="h-4 w-4 text-primary" />}
                    {benefit === "Noise Reduction" && <Volume2 className="h-4 w-4 text-primary" />}
                    {benefit === "Industrial Durability" && <ShieldCheck className="h-4 w-4 text-primary" />}
                    {benefit === "Seamless Passage" && <ArrowRightLeft className="h-4 w-4 text-primary" />}
                    <span className="text-foreground">{benefit}</span>
                  </div>)}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto font-semibold">
                  Get Free Quote
                </Button>
                <Button variant="outline" onClick={() => window.open(formatWhatsAppLink(COMPANY_INFO.whatsapp, "Hi, I'm interested in PVC Strip Curtains for my business in Karnataka. Please send me a quote."), '_blank')} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto font-semibold">
                  <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </motion.div>

            {/* Product Image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            ...springTransition,
            delay: 0.2
          }} className="relative lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border h-[500px] sm:h-[550px]">
                <img src={IMAGES.REALISTIC_PVC_CURTAINS_2_32} alt="Industrial PVC Strip Curtains Karnataka" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl ring-1 ring-border hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Energy Saving</p>
                    <p className="text-2xl font-bold">Up to 30%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lead Form */}
            <div className="hidden lg:block lg:order-3">
              <HeroLeadForm className="max-w-md mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Our PVC Curtains?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Engineered for durability and operational excellence in high-traffic commercial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {COMPANY_INFO.benefits.map((benefit, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }}>
                <Card className="h-full hover:shadow-md transition-shadow border-none bg-card ring-1 ring-border">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {idx === 0 && <Gauge className="h-6 w-6" />}
                      {idx === 1 && <Shield className="h-6 w-6" />}
                      {idx === 2 && <Volume2 className="h-6 w-6" />}
                      {idx === 3 && <ShieldCheck className="h-6 w-6" />}
                      {idx === 4 && <ArrowRightLeft className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src={IMAGES.WAREHOUSE_ENTRANCE_1} alt="Warehouse Application" className="rounded-xl shadow-lg h-48 sm:h-64 w-full object-cover" />
                <img src={IMAGES.INDUSTRIAL_INTERIOR_2} alt="Industrial Interior" className="rounded-xl shadow-lg h-48 sm:h-64 w-full object-cover sm:mt-8" />
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Tailored for Diverse <span className="text-primary">Karnataka Industries</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {COMPANY_INFO.industries.map((industry, idx) => <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 ring-1 ring-border hover:bg-accent transition-colors">
                    {industry.includes("Warehousing") && <Warehouse className="h-5 w-5 text-primary" />}
                    {industry.includes("Food") && <ShoppingCart className="h-5 w-5 text-primary" />}
                    {industry.includes("Cold") && <Thermometer className="h-5 w-5 text-primary" />}
                    {industry.includes("Pharma") && <Pill className="h-5 w-5 text-primary" />}
                    {industry.includes("Hospitality") && <Hotel className="h-5 w-5 text-primary" />}
                    {industry.includes("Manufacturing") && <Factory className="h-5 w-5 text-primary" />}
                    <span className="font-medium">{industry}</span>
                  </div>)}
              </div>
              <Button className="mt-10" variant="link" onClick={() => scrollToSection("contact")}>
                Consult for your industry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5 px-3 py-1 text-xs sm:text-sm">
              Our Process
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How We Work With <span className="text-primary">Your Business</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base">
              From initial consultation to ongoing support, we ensure a seamless experience 
              tailored to your specific industrial requirements across Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Step 1: Site Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1 }}
              className="text-center"
            >
              <Card className="h-full hover:shadow-md transition-shadow border-none bg-card ring-1 ring-border relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                    <Search className="h-8 w-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Site Assessment</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    Our experts visit your facility to assess dimensions, environmental factors, 
                    and specific operational requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2: Requirement Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1 }}
              className="text-center"
            >
              <Card className="h-full hover:shadow-md transition-shadow border-none bg-card ring-1 ring-border relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                    <ClipboardCheck className="h-8 w-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Requirement Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    We analyze your industry needs, traffic patterns, temperature control, 
                    and contamination prevention requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3: Customized Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.1 }}
              className="text-center"
            >
              <Card className="h-full hover:shadow-md transition-shadow border-none bg-card ring-1 ring-border relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                    <Users className="h-8 w-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Customized Solutions</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    We design tailored PVC curtain solutions with optimal thickness, 
                    dimensions, and mounting systems for your facility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 4: Expert Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 3 * 0.1 }}
              className="text-center"
            >
              <Card className="h-full hover:shadow-md transition-shadow border-none bg-card ring-1 ring-border relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                    <Wrench className="h-8 w-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Expert Installation</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    Our certified technicians ensure precise installation with minimal 
                    disruption to your daily operations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 5: After-Sales Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 4 * 0.1 }}
              className="text-center"
            >
              <Card className="h-full hover:shadow-md transition-shadow border-none bg-card ring-1 ring-border relative">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
                    <Headphones className="h-8 w-8" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">After-Sales Support</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm">
                    Ongoing maintenance support, replacement parts, and technical assistance 
                    to ensure long-term performance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-card p-6 sm:p-8 rounded-2xl ring-1 ring-border max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a free consultation and customized quote for your industrial PVC curtain requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 font-semibold"
                >
                  Schedule Site Visit
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(formatWhatsAppLink(COMPANY_INFO.whatsapp, "Hi, I'd like to schedule a site assessment for PVC Strip Curtains at my facility in Karnataka."), '_blank')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8 font-semibold"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-16 sm:py-20 lg:py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4 text-xs sm:text-sm">Detailed Specifications</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Complete Technical Data</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Comprehensive specifications for informed decision-making. All our PVC strip curtains meet international quality standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <img src={IMAGES.PVC_STRIP_CURTAIN_PRODUCT_2_28} alt="Technical Specs" className="rounded-2xl shadow-xl ring-1 ring-border" />
              </div>
              <div className="space-y-6">
                {COMPANY_INFO.productSpecs.pvcCurtains.map((spec, idx) => <div key={idx} className="flex justify-between items-center py-4 border-b border-border last:border-0">
                    <span className="text-muted-foreground font-medium">{spec.label}</span>
                    <span className="font-mono font-bold text-primary">{spec.value}</span>
                  </div>)}
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground italic mb-4">
                    * Custom dimensions and heavy-duty reinforced strips available on request.
                  </p>
                  <Button variant="outline" onClick={() => window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })} className="w-full">
                    View Interactive Specifications Above
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get Your Custom Quote Today</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Ready to enhance your facility with premium PVC strip curtains? Contact our experts for personalized solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 ring-1 ring-border">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a href={formatPhoneForLink(COMPANY_INFO.phone)} className="text-primary hover:underline">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 ring-1 ring-border">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 ring-1 ring-border">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Visit Our Office</h3>
                    <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => window.open(formatWhatsAppLink(COMPANY_INFO.whatsapp, "Hi, I need a detailed quote for PVC Strip Curtains for my business in Karnataka."), '_blank')} className="bg-green-500 hover:bg-green-600 text-white h-12 px-8 flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = formatPhoneForLink(COMPANY_INFO.phone)} className="h-12 px-8 flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>

              <div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-8 sm:py-12 bg-muted border-t border-border pb-20 md:pb-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground">
            {COMPANY_INFO.copyright} | {COMPANY_INFO.tagline}
          </p>
        </div>
      </footer>
    </div>;
}
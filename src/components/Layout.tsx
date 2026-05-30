import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronRight, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";
import { COMPANY_INFO, formatPhoneForLink, scrollToSection } from "@/lib/index";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/assets/images";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Benefits",
    href: "#benefits"
  }, {
    name: "Applications",
    href: "#applications"
  }, {
    name: "Specifications",
    href: "#specifications"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsMenuOpen(false);
  };
  return <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2 border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <a href={formatPhoneForLink(COMPANY_INFO.phone)} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" />
              {COMPANY_INFO.email}
            </a>
            <div className="flex items-center gap-2 opacity-80">
              <Clock className="w-3 h-3" />
              {COMPANY_INFO.workingHours}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={COMPANY_INFO.socialLinks.linkedin} className="hover:text-accent transition-colors">
              <SiLinkedin className="w-3.5 h-3.5" />
            </a>
            <a href={COMPANY_INFO.socialLinks.facebook} className="hover:text-accent transition-colors">
              <SiFacebook className="w-3.5 h-3.5" />
            </a>
            <a href={COMPANY_INFO.socialLinks.twitter} className="hover:text-accent transition-colors">
              <SiX className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2 sm:py-3" : "bg-background py-3 sm:py-5"}`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={e => handleNavClick(e, "#")} className="flex items-center gap-2 group shrink-0">
            <img 
              src={IMAGES.SCREENSHOT4568_36} 
              alt="Airteknics Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.href)} className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
                {item.name}
              </a>)}
          </nav>

          {/* Desktop Actions - Right Aligned */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <Button 
              variant="outline"
              onClick={() => window.location.href = formatPhoneForLink(COMPANY_INFO.phone)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-4 text-sm h-10"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            
            <Button onClick={() => scrollToSection("contact-form")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 font-semibold shadow-lg shadow-primary/20 text-sm h-10">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => window.location.href = formatPhoneForLink(COMPANY_INFO.phone)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-3 text-xs flex items-center h-9"
            >
              <Phone className="mr-1 h-3.5 w-3.5" />
              Call
            </Button>
            
            <button className="p-2 text-foreground rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden bg-background border-t overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
                {navItems.map(item => <a key={item.name} href={item.href} onClick={e => handleNavClick(e, item.href)} className="text-lg font-medium text-foreground py-3 flex items-center justify-between group border-b border-border/50 last:border-0">
                    {item.name}
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>)}
                
                <Button 
                  onClick={() => window.location.href = formatPhoneForLink(COMPANY_INFO.phone)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-base mt-4 rounded-xl shadow-md flex justify-center items-center font-bold"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: {COMPANY_INFO.phone}
                </Button>
                
                <Button onClick={() => {
                  scrollToSection("contact-form");
                  setIsMenuOpen(false);
                }} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-base rounded-xl shadow-lg font-bold">
                  Request Consultation
                </Button>
              </div>
            </motion.div>}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Bio */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  {COMPANY_INFO.name}
                </span>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                {COMPANY_INFO.tagline}
              </p>
              <div className="flex items-center gap-4">
                <a href={COMPANY_INFO.socialLinks.linkedin} className="p-2 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <SiLinkedin className="w-4 h-4" />
                </a>
                <a href={COMPANY_INFO.socialLinks.facebook} className="p-2 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a href={COMPANY_INFO.socialLinks.twitter} className="p-2 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <SiX className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Navigation</h4>
              <ul className="space-y-3">
                {navItems.map(item => <li key={item.name}>
                    <a href={item.href} onClick={e => handleNavClick(e, item.href)} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary/40 rounded-full" />
                      {item.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Target Industries</h4>
              <ul className="space-y-3">
                {COMPANY_INFO.industries.slice(0, 5).map(industry => <li key={industry} className="text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary/40 rounded-full" />
                    {industry}
                  </li>)}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm leading-relaxed opacity-80">
                    {COMPANY_INFO.address}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={formatPhoneForLink(COMPANY_INFO.phone)} className="text-sm hover:text-primary transition-colors font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm hover:text-primary transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>{COMPANY_INFO.copyright}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span className="hidden md:inline">Designed for Excellence in Bangalore</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}
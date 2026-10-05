import { useState } from "react";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const resumeUrl = "/resume-priyansh-pathak.pdf";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setSending(true);
    try { await emailjs.send("service_2kfszee", "template_kd3n7tc", { from_name: form.name, from_email: form.email, message: form.message }, "U85-nMUV6KmM-D1fd"); setForm({ name: "", email: "", message: "" }); toast({ title: "Message sent", description: "Thank you — I’ll reply as soon as possible." }); }
    catch { toast({ title: "Message not sent", description: "Please contact me directly by email.", variant: "destructive" }); }
    finally { setSending(false); }
  };
  return <section id="contact" className="px-6 py-24 lg:px-8"><div className="container mx-auto max-w-6xl"><div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
    <div><p className="section-label">Contact</p><h2 className="section-title">Let’s build something useful.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Open to AI/ML internships, software engineering opportunities, research collaborations, and relevant technical projects.</p><div className="mt-9 space-y-3 text-sm">
      <a className="flex items-center gap-3 hover:text-primary" href="mailto:pripat1008@gmail.com"><Mail className="h-4 w-4" />pripat1008@gmail.com</a>
      <a className="flex items-center gap-3 hover:text-primary" href="https://linkedin.com/in/pripat1008" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
      <a className="flex items-center gap-3 hover:text-primary" href="https://github.com/pripat1008" target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a>
      <a className="flex items-center gap-3 hover:text-primary" href={resumeUrl} download="Priyansh_Pathak_CV.pdf"><Download className="h-4 w-4" />Download resume</a>
    </div></div>
    <form onSubmit={submit} className="border border-border bg-card p-6 md:p-8"><div className="grid gap-5 sm:grid-cols-2"><div><label className="mb-2 block text-sm font-medium">Name</label><Input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></div><div><label className="mb-2 block text-sm font-medium">Email</label><Input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></div></div><div className="mt-5"><label className="mb-2 block text-sm font-medium">Message</label><Textarea rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required /></div><Button className="mt-5" type="submit" disabled={sending}><Send className="mr-2 h-4 w-4" />{sending ? "Sending…" : "Send message"}</Button></form>
  </div></div></section>;
};
export default Contact;
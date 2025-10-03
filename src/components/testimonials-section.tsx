"use client";
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import testimonialsData from '@/data/testimonials.json'

export default function TestimonialsSection() {
    const featuredTestimonial = testimonialsData.testimonials.find(t => t.isFeatured)
    const otherTestimonials = testimonialsData.testimonials.filter(t => !t.isFeatured)

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-bold text-foreground lg:text-5xl">
                        Trusted by professionals worldwide
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Don't just take my word for it. Here's what industry leaders and colleagues say about working with me.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    {/* Featured Testimonial */}
                    {featuredTestimonial && (
                        <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 bg-card border-border hover:border-primary/20 transition-colors duration-300">
                            <CardHeader>
                                <div className="h-6 w-fit">
                                    <span className="text-primary font-semibold text-lg">★★★★★</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-xl font-medium text-foreground leading-relaxed">
                                        "{featuredTestimonial.quote}"
                                    </p>

                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage
                                                src={featuredTestimonial.avatar}
                                                alt={featuredTestimonial.name}
                                                height="48"
                                                width="48"
                                                loading="lazy"
                                            />
                                            <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                                                {featuredTestimonial.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <cite className="text-sm font-medium text-foreground not-italic">
                                                {featuredTestimonial.name}
                                            </cite>
                                            <span className="text-muted-foreground block text-sm">
                                                {featuredTestimonial.role} at {featuredTestimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    )}

                    {/* Other Testimonials */}
                    {otherTestimonials.map((testimonial, index) => (
                        <Card 
                            key={testimonial.id} 
                            className={`bg-card border-border hover:border-primary/20 transition-colors duration-300 ${
                                index === 0 ? 'md:col-span-2' : ''
                            }`}
                        >
                            <CardContent className="h-full pt-6">
                                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                    <p className="text-lg font-medium text-foreground leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                        <Avatar className="size-12">
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                height="48"
                                                width="48"
                                                loading="lazy"
                                            />
                                            <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <cite className="text-sm font-medium text-foreground not-italic">
                                                {testimonial.name}
                                            </cite>
                                            <span className="text-muted-foreground block text-sm">
                                                {testimonial.role} at {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

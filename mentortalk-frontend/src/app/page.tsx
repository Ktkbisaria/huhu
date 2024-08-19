/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hDSBrxEtfws
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "../../components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background px-4 py-3 shadow-sm md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PresentationIcon className="h-8 w-8" />
          <span className="text-lg font-bold">MentorTalk</span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for mentors"
            className="w-full rounded-md bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Carousel className="mt-4">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
                <h2 className="text-2xl font-bold">Featured Mentors</h2>
                <p className="text-sm">Discover top-rated experts in your field</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                  prefetch={false}
                >
                  Explore Mentors
                </Link>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-secondary to-tertiary p-6 text-secondary-foreground">
                <h2 className="text-2xl font-bold">Upcoming Sessions</h2>
                <p className="text-sm">Don't miss out on valuable insights</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-secondary-foreground px-4 py-2 text-sm font-medium text-secondary shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-1"
                  prefetch={false}
                >
                  View Schedule
                </Link>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-tertiary to-primary p-6 text-tertiary-foreground">
                <h2 className="text-2xl font-bold">Mentor Promotions</h2>
                <p className="text-sm">Exclusive offers and discounts</p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-tertiary-foreground px-4 py-2 text-sm font-medium text-tertiary shadow-sm transition-colors hover:bg-tertiary/90 focus:outline-none focus:ring-1 focus:ring-tertiary focus:ring-offset-1"
                  prefetch={false}
                >
                  Explore Offers
                </Link>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeftIcon className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
          </CarouselPrevious>
          <CarouselNext>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronRightIcon className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </CarouselNext>
        </Carousel>
        <div className="mt-8 px-4 md:px-6">
          <h2 className="text-lg font-bold">Popular Services</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <CodeIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Programming</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <TypeIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Design</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <BusIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Business</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <StoreIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Marketing</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <CurrencyIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Finance</span>
            </Link>
            <Link
              href="#"
              className="flex flex-col items-center gap-2 rounded-md bg-muted p-4 text-center transition-colors hover:bg-muted/50"
              prefetch={false}
            >
              <CogIcon className="h-8 w-8 text-muted-foreground" />
              <span className="text-sm font-medium">Coaching</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 px-4 md:px-6">
          <h2 className="text-lg font-bold">Featured Mentors</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="flex flex-col">
              <div className="relative h-40 overflow-hidden rounded-t-md">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Mentor"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  4.9
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">Software Engineer</div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Experienced software engineer with a passion for mentoring. Specializes in full-stack development and
                  cloud architecture.
                </div>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                    prefetch={false}
                  >
                    Book a Session
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <div className="relative h-40 overflow-hidden rounded-t-md">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Mentor"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  4.7
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="font-medium">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">Digital Marketing Specialist</div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Seasoned digital marketing expert with a track record of driving successful campaigns. Specializes in
                  SEO, social media, and content marketing.
                </div>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                    prefetch={false}
                  >
                    Book a Session
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <div className="relative h-40 overflow-hidden rounded-t-md">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Mentor"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  4.8
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="font-medium">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">Business Consultant</div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Experienced business consultant with expertise in strategy, operations, and organizational
                  development. Helps startups and SMBs scale effectively.
                </div>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                    prefetch={false}
                  >
                    Book a Session
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <div className="relative h-40 overflow-hidden rounded-t-md">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Mentor"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  4.6
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="font-medium">Emily Davis</div>
                  <div className="text-sm text-muted-foreground">Career Coach</div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Certified career coach with a passion for helping professionals navigate their career paths.
                  Specializes in resume building, interview preparation, and job search strategies.
                </div>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                    prefetch={false}
                  >
                    Book a Session
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <nav className="sticky bottom-0 z-10 flex w-full bg-background shadow-top">
        <Link
          href="#"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors hover:bg-muted/50"
          prefetch={false}
        >
          <WebcamIcon className="h-6 w-6 text-muted-foreground" />
          <span>Chat</span>
        </Link>
        <Link
          href="#"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors hover:bg-muted/50"
          prefetch={false}
        >
          <PhoneCallIcon className="h-6 w-6 text-muted-foreground" />
          <span>Call</span>
        </Link>
        <Link
          href="#"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors hover:bg-muted/50"
          prefetch={false}
        >
          <WalletIcon className="h-6 w-6 text-muted-foreground" />
          <span>Wallet</span>
        </Link>
        <Link
          href="#"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium transition-colors hover:bg-muted/50"
          prefetch={false}
        >
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  )
}

function BusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function PhoneCallIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
      <path d="M14.05 6A5 5 0 0 1 18 10" />
    </svg>
  )
}


function PresentationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}


function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}


function WebcamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  )
}
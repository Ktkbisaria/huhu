/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z82j0YZJRWl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "../../components/ui/input"
import { Carousel, CarouselItem } from "../../components/ui/carousel"
import { Button } from "../../components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="w-6 h-6" />
            <span className="text-lg font-bold">MentorTalk</span>
          </Link>
          <div className="relative w-full max-w-md">
            <Input type="text" placeholder="Search mentors..." className="pr-10 w-full" />
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Find Mentors
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Live Sessions
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Profile
          </Link>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Carousel>
              <CarouselItem>
                <div className="bg-[#f0f6ff] rounded-lg p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Unlock Your Potential with Expert Mentors</h2>
                    <p className="text-muted-foreground">
                      Connect with industry leaders and get personalized guidance.
                    </p>
                  </div>
                  <img
                    src="/placeholder.svg"
                    alt="Mentor"
                    width={200}
                    height={200}
                    className="rounded-full"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-[#f0f6ff] rounded-lg p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Upcoming Live Sessions</h2>
                    <p className="text-muted-foreground">Join interactive workshops and Q&A sessions with experts.</p>
                  </div>
                  <img
                    src="/placeholder.svg"
                    alt="Live Session"
                    width={200}
                    height={200}
                    className="rounded-full"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-[#f0f6ff] rounded-lg p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Skill Development Courses</h2>
                    <p className="text-muted-foreground">Enhance your skills and knowledge with our curated courses.</p>
                  </div>
                  <img
                    src="/placeholder.svg"
                    alt="Skill Development"
                    width={200}
                    height={200}
                    className="rounded-full"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />
                </div>
              </CarouselItem>
            </Carousel>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link
              href="#"
              className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <div className="p-6 flex flex-col items-center">
                <UsersIcon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Talk to Mentors</h3>
                <p className="text-muted-foreground text-center">
                  Connect with experienced professionals for guidance and support.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <div className="p-6 flex flex-col items-center">
                <VideoIcon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Live Sessions</h3>
                <p className="text-muted-foreground text-center">
                  Attend interactive workshops and Q&A sessions with experts.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <div className="p-6 flex flex-col items-center">
                <BookIcon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Skill Development</h3>
                <p className="text-muted-foreground text-center">
                  Enhance your skills and knowledge with our curated courses.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <div className="p-6 flex flex-col items-center">
                <BriefcaseIcon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Career Advice</h3>
                <p className="text-muted-foreground text-center">
                  Get personalized guidance for your career development.
                </p>
              </div>
            </Link>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Featured Mentors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="/placeholder.svg"
                    alt="Mentor 1"
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-muted-foreground mb-2">Business Strategy Consultant</p>
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-bold">4.9</span>
                    <span className="text-muted-foreground">(125 reviews)</span>
                  </div>
                  <Button>Book a Session</Button>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="/placeholder.svg"
                    alt="Mentor 2"
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                  <p className="text-muted-foreground mb-2">Career Development Coach</p>
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-bold">4.8</span>
                    <span className="text-muted-foreground">(92 reviews)</span>
                  </div>
                  <Button>Book a Session</Button>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="/placeholder.svg"
                    alt="Mentor 3"
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
                  <p className="text-muted-foreground mb-2">Marketing Strategist</p>
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-bold">4.7</span>
                    <span className="text-muted-foreground">(84 reviews)</span>
                  </div>
                  <Button>Book a Session</Button>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col items-center">
                  <img
                    src="/placeholder.svg"
                    alt="Mentor 4"
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <h3 className="text-xl font-bold mb-2">Emily Davis</h3>
                  <p className="text-muted-foreground mb-2">Leadership Coach</p>
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-bold">4.9</span>
                    <span className="text-muted-foreground">(112 reviews)</span>
                  </div>
                  <Button>Book a Session</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="w-6 h-6" />
            <span className="text-lg font-bold">MentorTalk</span>
          </Link>
          <span className="text-sm text-muted-foreground">&copy; 2024 MentorTalk. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
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


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function VideoIcon(props) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
import { Home, BookOpen } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 sm:py-28 bg-[#F8FAFC]">
      <Container className="text-center max-w-xl space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EFF7FF] text-[#0756A8] border border-[#D0E7FF]">
          404 Error
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#062B52] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-base text-[#64748B] leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been moved. You can return to our homepage or browse our computer courses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            href="/"
            className="w-full sm:w-auto gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            href="/courses"
            className="w-full sm:w-auto gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>View All Courses</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

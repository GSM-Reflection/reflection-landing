import { ReactNode } from "react";

interface ContentGuideProps {
  children?: ReactNode;
}

export default function ContentGuide({ children }: ContentGuideProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3">{children}</div>
    </div>
  );
}

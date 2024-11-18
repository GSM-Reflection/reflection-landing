export default function Location() {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:justify-center gap-8 xl:gap-[163px] mb-[841px] mt-[179px]">
      <div className="text-center xl:text-left">
        <h1 className="mb-6 xl:mb-[40px] font-bold text-[32px] xl:text-[48px]">
          여기서 만나요!
        </h1>
        <div className="text-[16px] xl:text-[24px]">
          <p>2024년 12월 21일</p>
          <p>광주소프트웨어마이스터고등학교 강당(2층)</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.552902945741!2d126.79764914078518!3d35.14282927287924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718861a50637e9%3A0x92a1425ff15c499c!2z6rSR7KO87IaM7ZSE7Yq47Juo7Ja066eI7J207Iqk7YSw6rOg65Ox7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1731916156459!5m2!1sko!2skr"
        className="w-3/4 h-[300px] xl:w-[613px] xl:h-[510px] border-0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

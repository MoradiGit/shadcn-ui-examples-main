// app/privacy/page.tsx
import Link from 'next/link';

export default function PrivacyPage() {
return(  
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">حریم خصوصی</h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            ما به حفظ حریم خصوصی شما احترام می‌گذاریم و اطلاعات شما را با دقت و مطابق با قوانین حفاظت از داده‌ها مدیریت می‌کنیم.
          </p>

          <p>
            اطلاعاتی که در این سامانه جمع‌آوری می‌شود شامل شماره موبایل، آدرس IP و فعالیت‌های کاربری است. این اطلاعات فقط برای ارائه خدمات بهتر و امنیت سامانه استفاده می‌شود.
          </p>

          <p>
            ما اطلاعات شما را به اشخاص ثالثی که با این سامانه همکاری می‌کنند (مثل ارائه‌دهندگان امنیت یا تحلیل داده) ارائه نمی‌دهیم، مگر در صورت الزام قانونی.
          </p>

          <p>
            شما می‌توانید در هر زمان از حساب خود خارج شوید یا درخواست حذف اطلاعات خود را ارسال کنید.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
          >
            بازگشت به صفحه ورود
          </Link>
        </div>
      </div>
    </div>
  );
};
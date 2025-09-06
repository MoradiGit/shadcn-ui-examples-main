// app/terms/page.tsx
import Link from 'next/link';

export default function TermPage() {
return(    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">شرایط و قوانین استفاده</h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            با ورود به این سامانه، شما موافقت می‌کنید که تمامی اطلاعات شخصی و داده‌هایی که توسط شما ارائه می‌شود، طبق قوانین حفاظت از حریم خصوصی ذکر شده در این سامانه استفاده و ذخیره شوند.
          </p>

          <p>
            این سامانه تنها برای استفاده مجاز و غیرتجاری طراحی شده است. هرگونه استفاده نادرست، تقلب، یا انتقال اطلاعات بدون اجازه، ممنوع است و ممکن است منجر به مسدود شدن حساب شما شود.
          </p>

          <p>
            ما حق داریم بدون اطلاع قبلی، محتوای سامانه را به‌روزرسانی کنیم یا خدماتی را متوقف کنیم. شرایط این سامانه ممکن است به‌طور دوره‌ای اصلاح شوند.
          </p>

          <p>
            با ادامه استفاده از این سامانه، شما موافقت می‌کنید که این شرایط و قوانین به‌طور کامل رعایت شوند.
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
    </div>);

}
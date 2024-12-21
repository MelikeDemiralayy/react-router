# React-Router
Bu proje, **React Router** kullanarak sayfa yönlendirmelerini ve dinamik rota yapılarını anlamak amacıyla oluşturulmuştur. Öğrendiğim kavramları ve deneyimlerimi bu README dosyasında dokumente edeceğim.

## Kullanılan Teknolojiler
- React.js
- React Router DOM

## React-Router Nedir, Neden Kullanılır?
**React Router**, React tabanlı uygulamalarda sayfa yönlendirmelerini yönetmek için kullanılan güçlü bir kütüphanedir. Tek sayfa uygulamalarında (SPA) kullanıcı deneyimini iyileştirir ve farklı sayfalara kesintisiz geçiş sağlar.
- Sayfalar arası geçişte sayfanın tamamı yenilenmez sadece iilgili bileşen yeniden render edilir.
- URL parametreleri, sorgu dizeleri ve dinamik yollar kolayca yönetilebilir.
- Alt bileşenler ve iç içe geçmiş yönlendirmeler desteklenir (Nested Routes)
- React state yönetimi ile sorunsuz şekilde entegre olur.

## Temel Kavramları
- **Routes ve Route:** Uygulamanın farklı URL yollarını tanımlamak için kullanılır.
- **BrowserRouter:** Tarayıcıdaki adres çubuğunu kullanarak yönlendirme yapar.
- **Link ve NavLink:** Sayfalar arası geçiş için kullanılır.
- **useNavigate:** Programatik olarak sayfalar arası geçiş sağlar.
- **useParams:** URL parametrelerine erişim sağlar.
- **Outlet:** Nested Routes için alt bileşenlerin render edilmesini sağlar.



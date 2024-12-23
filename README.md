# React-Router
Bu proje, **React Router** kullanarak sayfa yönlendirmelerini ve dinamik rota yapılarını anlamak amacıyla oluşturulmuştur. Öğrendiğim kavramları ve deneyimlerimi bu README dosyasında dokumente edeceğim.

## Kullanılan Teknolojiler
- React.js
- React Router DOM

## Proje Kurulumu
1- **Repoyu İndirme**:İlk olarak, projeyi GitHub'dan bilgisayarınıza klonlayın. Terminal veya komut istemcisine şu komutu yazın:
```
git clone <repository-link>
```
2- **Proje Bağımlılıklarını Yükleme**:Proje klasörüne gidin ve gerekli bağımlılıkları yüklemek için şu komutu çalıştırın:
```
cd <project-folder>
   npm install
```
3-**JSON Server'ı Başlatma:** JSON Server'ı çalıştırmak için şu komutu kullanabilirsiniz:
```
npx json-server --watch src/data/data.json --port 5001
```
Bu komut, src/data/data.json dosyasını izlemeye başlayacak ve JSON Server'ı 5001 portunda başlatacaktır.

4-**Uygulamayı Başlatma:**
```
npm run dev
```
Bu komut, Vite'i başlatacak ve React uygulamanız http://localhost:5173 adresinde çalışacaktır.


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

### Routes ve Route
- Uygulamanın farklı URL yollarını tanımlamak için kullanılır. Route bileşeni belirli bir yol için render edilecek bileşeni belirtirken, Routes ise tüm yönlendirmeleri kapsar.
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
// ikisi de tek başlarına kullanılmazlar
</Routes>
```
### BrowserRouter: 
- tarayıcıdaki URL değişikliklerine dayanarak React uygulamanızda yönlendirmeleri yönetir. URL'nin her değişikliği, tarayıcıdaki adres çubuğunda görünür ve uygulama buna göre doğru bileşeni render eder.
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
### RouteLayout:
- RouteLayout, uygulamanın genel yapısına göre alt bileşenlerin düzenlenmesini sağlar. Genellikle tüm sayfa düzeni için kullanılan bir bileşen olup, sayfanın genel yapısını ve navigasyonu tanımlar
```jsx
const RouteLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* Burada alt bileşenler render edilir */}
      <Footer />
    </div>
  );
};

);
```
### Outlet
-  RouteLayout gibi ana düzen bileşenleri içinde alt bileşenlerin yerleştirileceği yeri belirler. Outlet, alt rotaların render edilmesini sağlar.
```jsx
<Routes>
  <Route path="/" element={<RouteLayout />}>
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
//Burada, RouteLayout bileşenindeki <Outlet />, home ve about gibi alt sayfaların render edilmesini sağlar.
```





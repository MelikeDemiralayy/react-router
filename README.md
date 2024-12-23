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
### createBrowserRouter: 
- BrowserRouter'ın kullanımını daha esnek hale getiren bir yöntemdir. Bu, React Router 6.4 ve sonrasında daha sık kullanılmaktadır.
```jsx
<Routes>
  <Route path="/" element={<RouteLayout />}>
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
//createBrowserRouter, dinamik yönlendirmeler için daha iyi yapılandırma sağlar.
```
### createRoutesFromElements:
- Route bileşenlerini bir araya getirerek bir rota yapısı oluşturmak için kullanılır. Bu, genellikle uygulamanın yönlendirmelerini dinamik hale getirmek için kullanılır.
```jsx
import { createRoutesFromElements, Route } from 'react-router-dom';

const routes = createRoutesFromElements(
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
);

function App() {
  return <RouterProvider router={routes} />;
}

```
### RouterProvider:
- createBrowserRouter veya diğer router yapılarını React uygulamasına sağlamak için kullanılır. Yönlendirme sağlayıcı bileşenidir.
  
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```
### Link ve NavLink:
- Link, React Router'da sayfalar arası geçişi sağlamak için kullanılır. Tarayıcıyı yenilemeden bileşenleri değiştirmek için kullanılır.
- NavLink, Link'e benzer ancak aynı zamanda aktif olan yolu stilize etmenizi sağlar. Bu, genellikle navigasyon menülerinde kullanılır.

```jsx
<Link to="/about">About</Link>

<NavLink to="/about" activeClassName="active">About</NavLink>
```
### Routing with useNavigate Hook:
- useNavigate hook'u, programatik olarak sayfalar arası geçiş yapmanızı sağlar. Bu hook, tıpkı <Link> veya <NavLink> gibi çalışmakla birlikte, kullanıcı etkileşimi yerine, JavaScript kodu aracılığıyla yönlendirme yapar.

```jsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about'); // '/about' sayfasına yönlendirir
  };

  return <button onClick={handleButtonClick}>Go to About</button>;
};

```
### Nested Router:
- bir sayfa içinde başka bir yönlendirme yapmanızı sağlar. Bu özellik, uygulamanızın hiyerarşik yapısını tanımlarken çok kullanışlıdır.

```jsx
<Routes>
  <Route path='contact' element={<ContactLayout />}>
  <Route path='info' element={<ContactInfo />} />
  <Route path='form' element={<ContactForm />} />
  </Route>
  <Route path='jobs' element={<JobsLayout />}>
  <Route index element={<Jobs />} loader={jobsLoader} errorElement={<Error/>} />
  </Route>
   <Route path='*' element={<NotFound />} />
</Routes>
```
### React Router Loader:
- Loader, bir rota yüklendiğinde veri yüklemek için kullanılır. Yönlendirme yapılmadan önce, genellikle bir API çağrısı veya veri çekme işlemi yapılması gerektiğinde kullanılır.
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      return { data };
    }
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

```

### Router Parameters:
- Router Parameters, URL'deki dinamik parametreleri almanızı sağlar. Örneğin, bir ürünün ID'sini URL üzerinden almak gibi durumlar için kullanılır.
```jsx
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <div>Product ID: {productId}</div>;
};

// Router yapılandırması
<Routes>
  <Route path="/product/:productId" element={<Product />} />
</Routes>
// Bu örnekte, /product/:productId rotasında, productId parametresi dinamik olarak alınır ve useParams hook'u ile erişilir.
```

### React Router Error Element:
- Error Element, rotalarla ilgili bir hata durumunda gösterilecek bileşeni tanımlar. Eğer bir rota yüklenemediğinde veya başka bir hata olduğunda bu bileşen devreye girer.
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} /> {/* Hata sayfası */}
</Routes>
```

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



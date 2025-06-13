# Estructura de Arquitectura Hexagonal - React TypeScript

## 📁 Estructura de Carpetas Principal

```
src/
├── 📁 application/           # Capa de Aplicación (Use Cases)
│   ├── 📁 usecases/
│   ├── 📁 dto/
│   ├── 📁 ports/
│   └── 📁 services/
│
├── 📁 domain/                # Capa de Dominio (Entidades y Reglas de Negocio)
│   ├── 📁 entities/
│   ├── 📁 value-objects/
│   ├── 📁 repositories/
│   ├── 📁 services/
│   └── 📁 exceptions/
│
├── 📁 infrastructure/        # Capa de Infraestructura (Adaptadores)
│   ├── 📁 adapters/
│   │   ├── 📁 http/
│   │   ├── 📁 storage/
│   │   └── 📁 external/
│   ├── 📁 repositories/
│   ├── 📁 config/
│   └── 📁 utils/
│
├── 📁 presentation/          # Capa de Presentación (UI/UX)
│   ├── 📁 components/
│   │   ├── 📁 ui/           # Componentes base de Mantine
│   │   ├── 📁 common/       # Componentes comunes reutilizables
│   │   └── 📁 feature/      # Componentes específicos por feature
│   ├── 📁 pages/
│   ├── 📁 layouts/
│   ├── 📁 hooks/
│   ├── 📁 stores/          # Zustand stores
│   └── 📁 styles/          # Tailwind custom styles
│
├── 📁 shared/               # Código compartido entre capas
│   ├── 📁 types/
│   ├── 📁 constants/
│   ├── 📁 utils/
│   └── 📁 interfaces/
│
├── 📁 test/                 # Configuración y utilidades de testing
│   ├── 📁 mocks/
│   ├── 📁 fixtures/
│   └── 📁 utils/
│
└── 📁 router/               # Configuración de rutas
    └── index.ts
```

## 🏗️ Detalle por Capa

### 📂 Domain Layer (Núcleo del Negocio)

```
domain/
├── entities/
│   ├── User.entity.ts
│   ├── Product.entity.ts
│   └── Order.entity.ts
│
├── value-objects/
│   ├── Email.vo.ts
│   ├── Money.vo.ts
│   └── UserId.vo.ts
│
├── repositories/
│   ├── IUserRepository.interface.ts
│   ├── IProductRepository.interface.ts
│   └── IOrderRepository.interface.ts
│
├── services/
│   ├── UserDomainService.ts
│   ├── OrderDomainService.ts
│   └── PaymentDomainService.ts
│
└── exceptions/
    ├── DomainException.ts
    ├── ValidationException.ts
    └── NotFoundedException.ts
```

### 📂 Application Layer (Casos de Uso)

```
application/
├── usecases/
│   ├── user/
│   │   ├── CreateUserUseCase.ts
│   │   ├── GetUserUseCase.ts
│   │   ├── UpdateUserUseCase.ts
│   │   └── DeleteUserUseCase.ts
│   │
│   ├── product/
│   │   ├── CreateProductUseCase.ts
│   │   ├── GetProductsUseCase.ts
│   │   └── UpdateProductUseCase.ts
│   │
│   └── order/
│       ├── CreateOrderUseCase.ts
│       ├── GetOrdersUseCase.ts
│       └── CancelOrderUseCase.ts
│
├── dto/
│   ├── user/
│   │   ├── CreateUserDto.ts
│   │   ├── UpdateUserDto.ts
│   │   └── UserResponseDto.ts
│   │
│   ├── product/
│   │   ├── CreateProductDto.ts
│   │   └── ProductResponseDto.ts
│   │
│   └── order/
│       ├── CreateOrderDto.ts
│       └── OrderResponseDto.ts
│
├── ports/
│   ├── IEmailService.interface.ts
│   ├── IPaymentService.interface.ts
│   ├── INotificationService.interface.ts
│   └── IFileStorageService.interface.ts
│
└── services/
    ├── UserApplicationService.ts
    ├── ProductApplicationService.ts
    └── OrderApplicationService.ts
```

### 📂 Infrastructure Layer (Adaptadores)

```
infrastructure/
├── adapters/
│   ├── http/
│   │   ├── AxiosHttpClient.ts
│   │   ├── HttpClientInterface.ts
│   │   └── interceptors/
│   │       ├── AuthInterceptor.ts
│   │       └── ErrorInterceptor.ts
│   │
│   ├── storage/
│   │   ├── LocalStorageAdapter.ts
│   │   ├── SessionStorageAdapter.ts
│   │   └── IStorageAdapter.interface.ts
│   │
│   └── external/
│       ├── EmailServiceAdapter.ts
│       ├── PaymentServiceAdapter.ts
│       └── NotificationServiceAdapter.ts
│
├── repositories/
│   ├── UserRepository.ts
│   ├── ProductRepository.ts
│   └── OrderRepository.ts
│
├── config/
│   ├── environment.ts
│   ├── api.config.ts
│   ├── query-client.config.ts
│   └── axios.config.ts
│
└── utils/
    ├── ApiResponse.ts
    ├── ErrorHandler.ts
    └── Mapper.ts
```

### 📂 Presentation Layer (UI/UX)

```
presentation/
├── components/
│   ├── ui/                  # Componentes base de Mantine
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Table/
│   │
│   ├── common/              # Componentes comunes
│   │   ├── Layout/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── LoadingSpinner/
│   │   └── ErrorBoundary/
│   │
│   └── feature/             # Componentes por feature
│       ├── user/
│       │   ├── UserList/
│       │   ├── UserForm/
│       │   └── UserProfile/
│       │
│       ├── product/
│       │   ├── ProductList/
│       │   ├── ProductForm/
│       │   └── ProductCard/
│       │
│       └── order/
│           ├── OrderList/
│           ├── OrderForm/
│           └── OrderStatus/
│
├── pages/
│   ├── HomePage.tsx
│   ├── UsersPage.tsx
│   ├── ProductsPage.tsx
│   ├── OrdersPage.tsx
│   └── NotFoundPage.tsx
│
├── layouts/
│   ├── MainLayout.tsx
│   ├── AuthLayout.tsx
│   └── EmptyLayout.tsx
│
├── hooks/
│   ├── useUsers.hook.ts
│   ├── useProducts.hook.ts
│   ├── useOrders.hook.ts
│   └── useAuth.hook.ts
│
├── stores/                  # Zustand stores
│   ├── authStore.ts
│   ├── userStore.ts
│   ├── productStore.ts
│   ├── orderStore.ts
│   └── uiStore.ts
│
└── styles/
    ├── globals.css
    ├── components.css
    └── utilities.css
```

### 📂 Shared Layer (Código Compartido)

```
shared/
├── types/
│   ├── api.types.ts
│   ├── common.types.ts
│   ├── user.types.ts
│   ├── product.types.ts
│   └── order.types.ts
│
├── constants/
│   ├── api.constants.ts
│   ├── routes.constants.ts
│   ├── validation.constants.ts
│   └── ui.constants.ts
│
├── utils/
│   ├── validation.utils.ts
│   ├── format.utils.ts
│   ├── date.utils.ts
│   └── storage.utils.ts
│
└── interfaces/
    ├── IResponse.interface.ts
    ├── IPagination.interface.ts
    └── IFilter.interface.ts
```

### 📂 Test Layer (Testing)

```
test/
├── mocks/
│   ├── user.mocks.ts
│   ├── product.mocks.ts
│   ├── order.mocks.ts
│   └── api.mocks.ts
│
├── fixtures/
│   ├── user.fixtures.ts
│   ├── product.fixtures.ts
│   └── order.fixtures.ts
│
└── utils/
    ├── test.utils.ts
    ├── render.utils.ts
    └── mock.utils.ts
```

### 📂 Router Configuration

```
router/
├── index.ts
├── routes.ts
├── guards/
│   ├── AuthGuard.ts
│   └── RoleGuard.ts
└── types/
    └── router.types.ts
```

## 🔧 Archivos de Configuración Principal

```
├── vite.config.ts          # Configuración de Vite
├── vitest.config.ts        # Configuración de testing
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
├── .env.example           # Variables de entorno ejemplo
└── package.json           # Dependencias y scripts
```

## 📋 Principios de la Arquitectura

### ✅ Separación de Responsabilidades

- **Domain**: Lógica de negocio pura, sin dependencias externas
- **Application**: Casos de uso y orquestación
- **Infrastructure**: Implementaciones concretas y adaptadores
- **Presentation**: UI/UX y estado de la aplicación

### ✅ Inversión de Dependencias

- Las capas internas no conocen las externas
- Se usan interfaces para la comunicación entre capas
- Dependency Injection a través de constructores

### ✅ Testabilidad

- Cada capa es testeable independientemente
- Mocks e interfaces facilitan el testing unitario
- Separación clara entre lógica y presentación

### ✅ Mantenibilidad

- Código organizado por features y responsabilidades
- Fácil localización y modificación de funcionalidades
- Bajo acoplamiento entre módulos

## 🚀 Flujo de Datos

```
Presentation → Application → Domain ← Infrastructure
     ↑              ↓           ↓         ↑
  Zustand     Use Cases    Entities   Repositories
React Query              Value Objects   Adapters
  Mantine                   Services    HTTP Client
```

Esta estructura te permitirá mantener un código limpio, testeable y escalable respetando todos los principios de la arquitectura hexagonal.

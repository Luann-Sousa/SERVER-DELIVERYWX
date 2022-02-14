import { Router } from './userRoutes/userRoutes';
import { RouterAddres } from './addressRoutes/addressRoutes';
import { RouterCard } from './cardRoutes/cardRoutes';
import { RouterProduct } from './productRoutes/productRoutes';
import { RouterPayment } from './paymentRoutes/paymentRoutes';
import { RouteCompany } from './companyRoutes/companyRoutes';

const MainRouterUsers = Router;
const MainRouterAddress = RouterAddres;
const MainRouterCard = RouterCard;
const MainRouterProduct = RouterProduct;
const MainRouterPayment = RouterPayment;
const MainRouteCompany = RouteCompany;

export {
  MainRouterUsers,
  MainRouterAddress,
  MainRouterCard,
  MainRouterProduct,
  MainRouterPayment,
  MainRouteCompany,
};

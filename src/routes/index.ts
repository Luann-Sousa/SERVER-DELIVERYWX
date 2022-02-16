import { Router } from './userRoutes/userRoutes';
import { RouterAddres } from './addressRoutes/addressRoutes';
import { RouterCard } from './cardRoutes/cardRoutes';
import { RouterProduct } from './productRoutes/productRoutes';
import { RouterPayment } from './paymentRoutes/paymentRoutes';
import { RouteCompany } from './companyRoutes/companyRoutes';
import { RouterCarr } from './carrRoutes/carrRoutes';

const MainRouterUsers = Router;
const MainRouterAddress = RouterAddres;
const MainRouterCard = RouterCard;
const MainRouterProduct = RouterProduct;
const MainRouterPayment = RouterPayment;
const MainRouterCompany = RouteCompany;
const MainRouterCarr = RouterCarr;

export {
  MainRouterUsers,
  MainRouterAddress,
  MainRouterCard,
  MainRouterProduct,
  MainRouterPayment,
  MainRouterCompany,
  MainRouterCarr,
};

import { Router } from './userRoutes/userRoutes';
import { RouterAddres } from './addressRoutes/addressRoutes';
import { RouterCard } from './cardRoutes/cardRoutes';
import { RouterProduct } from './productRoutes/productRoutes';

const MainRouterUsers = Router;
const MainRouterAddress = RouterAddres;
const MainRouterCard = RouterCard;
const MainRouterProduct = RouterProduct;

export {
  MainRouterUsers,
  MainRouterAddress,
  MainRouterCard,
  MainRouterProduct,
};

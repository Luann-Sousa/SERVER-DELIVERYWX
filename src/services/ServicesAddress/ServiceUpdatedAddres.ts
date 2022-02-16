import { getCustomRepository } from 'typeorm';
import { RepositorieAddress } from '../../repositories/RepositoriesAddress';

interface IAddressUpdateProps {
  id: string;
  uf: string;
  city: string;
  zip_code: string;
  district: string;
  street: string;
  number: number;
  complement: string;
  lat: number;
  long: number;
  user_id: string;
}

class ServiceUpdatedAddres {
  async execute({
    id,
    uf,
    city,
    zip_code,
    district,
    street,
    number,
    complement,
    lat,
    long,
    user_id,
  }: IAddressUpdateProps) {
    const userRepository = getCustomRepository(RepositorieAddress);

    const user = await userRepository.findOne(id);

    if (!user) {
      return new Error(
        'O endreço que você tentou ataulizar e inválido tente outro ou solicite Adm!',
      );
    }

    user.uf = uf ? uf : user.uf;
    user.city = city ? city : user.city;
    user.zip_code = zip_code ? zip_code : zip_code;
    user.district = district ? district : district;
    user.street = street ? street : street;
    user.number = number ? number : number;
    user.complement = complement ? complement : complement;
    user.lat = lat ? lat : lat;
    user.long = long ? long : long;
    user_id = user_id ? user_id : user_id;
    const result = await userRepository.save(user);

    return { result };
  }
}

export { ServiceUpdatedAddres };

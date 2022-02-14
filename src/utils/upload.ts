import mullter from 'multer';
import crypto from 'crypto';
import path from 'path';

const locationSavesImage = path.resolve(
  __dirname,
  '..',
  '..',
  'upload',
  'images',
); //onde vai ser salva a image.

export default {
  directory: locationSavesImage,

  //onde vamos o nome quevai ser salvo a img e seu desitono.
  storage: mullter.diskStorage({
    destination: locationSavesImage,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex'); // criptografia e jogando na const.
      const resultFileNae = `${fileHash}-${file.originalname}`; //pegando nome original da foto.

      return callback(null, resultFileNae); //retornado o resultFileName
    },
  }),

  // Como esses arquivos serão filtrados, quais formatos são aceitos/esperados?
  fileFilter: (req, file, cb) => {
    // Procurando o formato do arquivo em um array com formatos aceitos
    // A função vai testar se algum dos formatos aceitos do ARRAY é igual ao formato do arquivo.
    const isAccepted = [
      'image/png',
      'image/jpg',
      'image/jpeg',
      'image/webp',
    ].find(formatoAceito => formatoAceito == file.mimetype);

    // O formato do arquivo bateu com algum aceito?
    if (isAccepted) {
      // Executamos o callback com o segundo argumento true (validação aceita)
      return cb(null, true);
    }

    // Se o arquivo não bateu com nenhum aceito, executamos o callback com o segundo valor false (validação falhouo)
    return cb(null, false);
  },
};

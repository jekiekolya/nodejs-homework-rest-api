const { User } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const jimp = require('jimp');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;

  try {
    // change file size
    const img = await jimp.read(req.file.path);
    await img
      .autocrop()
      .cover(
        250,
        250,
        jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(req.file.path);

    // replace file
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join('avatars', imageName);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });

    res.json({
      status: 'success',
      code: 200,
      data: {
        avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;

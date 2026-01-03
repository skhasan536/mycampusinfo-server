import jwt from 'jsonwebtoken';
import Auth from '../models/auth/auth_model.js';
import { googleClient } from '../utils/google-client.js';

export const handleGoogleAuthService = async (tokenId, userType, isWeb) => {
  if (!tokenId) {
    throw { status: 400, message: 'Google tokenId is required' };
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: tokenId,
    audience: isWeb ? process.env.GOOGLE_CLIENT_ID_WEB : process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  const { email } = payload;

  let existingAuth = await Auth.findOne({ email });

  if (!existingAuth) {
    existingAuth = new Auth({
      email,
      authProvider: 'google',
      userType: userType,
      isEmailVerified: true,
    });
    await existingAuth.save();
  }

  const token = jwt.sign(
    { id: existingAuth._id, email: existingAuth.email },
    process.env.SECRET,
    { expiresIn: '7d' }
  );

  return { auth: existingAuth, token };
};
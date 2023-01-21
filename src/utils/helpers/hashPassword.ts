import bcrypt from 'bcrypt'

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10)
}

export const comparePassword = async (
  hashPassword: string,
  passwordToCompare: string
): Promise<boolean> => await bcrypt.compare(passwordToCompare, hashPassword)

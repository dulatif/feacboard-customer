const TOKEN_KEY = 'token'

/**
 * Login
 */
export function login(token: string): Promise<{ status: 'success' | 'error' }> {
  return new Promise((resolve) => {
    try {
      localStorage.setItem(TOKEN_KEY, token)
      resolve({ status: 'success' })
    } catch (err) {
      console.error('Login error:', err)
      resolve({ status: 'error' })
    }
  })
}

/**
 * Get Token
 */
export function getToken(): string | null {
  if (typeof window === 'undefined') return null // SSR guard
  return localStorage.getItem(TOKEN_KEY)
}

/**
 * Check Token
 */
export function checkToken(): Promise<{ loggedIn: boolean; token?: string }> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve({ loggedIn: false })
    } else {
      const token = localStorage.getItem(TOKEN_KEY)
      if (token) {
        resolve({ loggedIn: true, token })
      } else {
        resolve({ loggedIn: false })
      }
    }
  })
}

/**
 * Logout
 */
export function logout(): Promise<{ status: 'success' | 'error' }> {
  return new Promise((resolve) => {
    try {
      localStorage.removeItem(TOKEN_KEY)
      resolve({ status: 'success' })
    } catch (err) {
      console.error('Logout error:', err)
      resolve({ status: 'error' })
    }
  })
}

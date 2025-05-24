class LicenseManager {
  static generateLicense(userId) {
    return `GMH-${userId}-${crypto.randomUUID().slice(0, 8)}`;
  }

  static validateLicense(licenseKey) {
    // Implementacja weryfikacji licencji
    // Możesz użyć prostego systemu z plikiem JSON
    // lub podpiąć pod Firebase/Cloudflare KV
  }
}

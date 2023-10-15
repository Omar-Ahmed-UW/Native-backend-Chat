const { Translate } = require("@google-cloud/translate").v2;

class TranslateService {
  constructor() {
    this.translate = new Translate();
    this.translate.key = "AIzaSyDkjc7H6MhCnHQa0siyQkohICz4CAPu6Uc";
  }

  static getInstance() {
    if (!TranslateService.instance) {
      TranslateService.instance = new TranslateService();
    }
    return TranslateService.instance;
  }
  async translateText(text, target) {
    try {
      let [translations] = await this.translate.translate(text, target);
      translations = Array.isArray(translations)
        ? translations
        : [translations];
      return translations[0];
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = TranslateService;

// AIzaSyDkjc7H6MhCnHQa0siyQkohICz4CAPu6Uc

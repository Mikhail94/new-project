class AutoNews {                                                /// подписка новостей
  
	constructor() {
		this.news = '';
		this.actions = [];
	}

	setNews(text) {
		this.news = text;
		this.notifyAll();
	}

	notifyAll() {
		return this.actions.forEach(subs => subs.inform(this));
	}

	register(observer) {
		this.actions.push(observer);
	}

	unregister(observer) {                                                      /// можно отписаться
		this.actions = this.actions.filter(el => !(el instanceof observer));
	}
};

class Jack {                                                                    /// КЛИЕНТ НА ПОДПИСКУ
	inform(message) {
		console.log(`Jack has been informed about: ${message.news}`);
	}
};

class Max {                                                                     /// КЛИЕНТ НА ПОДПИСКУ
	inform(message) {
		console.log(`Max has been informed about: ${message.news}`);
	}
};

class Jonh {                                                                    /// КЛИЕНТ НА ПОДПИСКУ        
	inform(message) {
		console.log(`Jonh has been informed about: ${message.news}`);
	}
};

const autoNews = new AutoNews();
autoNews.register(new Jack());              /// ПОДПИСЫВАЮТ НА НОВОСТИ
autoNews.register(new Max());               /// ПОДПИСЫВАЮТ НА НОВОСТИ
autoNews.register(new Jonh());              /// ПОДПИСЫВАЮТ НА НОВОСТИ

autoNews.setNews('Hello. We have a news!');  /// новая новость   

//
// autoNews.unregister(new Jack());         /// новая новость 

autoNews.setNews('Hello. We have a very new news!');
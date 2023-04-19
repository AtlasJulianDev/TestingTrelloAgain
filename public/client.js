/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

TrelloPowerUp.initialize({
  'authorization-status': function(t, options){
    return t.get('member', 'private', 'authToken')
    .then(function(authToken) {
      return { authorized: authToken != null }
    });
  },
  'show-authorization': function(t, options){
    return t.popup({
      title: 'Authorize 🥑 Account',
      url: './auth.html',
      height: 140,
    });
  },
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'Estimate Size',
      callback: function(t) {
        return t.popup({
          title: "Estimation",
          url: 'estimate.html',
        });
      }
		}];
	},
    'card-detail-badges': function(t, options) {
        return t.get('card', 'shared', 'estimate')
        .then(function(estimate) {
          return [{
            title: 'Estimate',
            text: estimate || 'No Estimate!',
            color: estimate ? null : 'red',
            callback: function(t) {
              return t.popup({
                title: "Estimation",
                url: 'estimate.html',
              });
            }
          }]
        });
      }
});
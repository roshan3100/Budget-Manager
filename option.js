$(function(){

	chrome.storage.sync.get('limit',function(budget){
		$('#limit').val(budget.limit);
	})

	$('#savelimit').click(function(){
		var limit = $('#limit').val();
		if(limit){
			chrome.storage.sync.set({'limit': limit},function(){
				close();
			})
		}
	})

	$('#resettotal').click(function(){
		chrome.storage.sync.set({'total':0},function(){

					var notifOptions={
						type: 'basic',
						iconUrl: 'icon48.png',
						title: 'Limit Reset',
						message: "Limit Reset to 0"
					};
					chrome.notifications.create('limitNotif',notifOptions);

		});
		
	})
})
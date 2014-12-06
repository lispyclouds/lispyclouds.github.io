
            $('#sendButton').click(function () {
                alert("Boobs");
                $.ajax({
                    type: "POST",
                    url: "https://mandrillapp.com/api/1.0/messages/send.json",
                    data: {
                        'key': 'Cxp5XwcFdLML84Xbt122Mw',
                        'message': {
                            'from_email': 'rahulde.me',
                            'to': [
                                {
                                    'email': 'rahul080327@gmail.com',
                                    'name': 'heisenberg',
                                    'type': 'to'
                                }
                            ],
                            'autotext': true,
                            'subject': 'New Message',
                            'html': [$('#name').value(), '(', $('#email').value(), ') says: ', $('#message').value()].join('')
                        }
                    }
                }).done(function(response) {
                    alert("Thanks for mailing!");
                });
            });
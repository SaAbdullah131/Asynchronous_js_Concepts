
                    // annonymus function
                    const takeOrder =(customer,callback)=> {
                        console.log(`take order for ${customer}`);
                        callback(customer);
                    }

                    const processOrder = (customer,callback) => {
                        console.log(`Processing Order for ${customer}`);

                        setTimeout(() => {
                                console.log(`cooking completed`); // set this asynchronous into a queue
                                console.log(`Order Processed for ${customer}`);
                                callback(customer);
                        }, 3000);
                    ;
                    };

                    const completedOrder = (customer) => {
                        console.log(`completed order for ${customer} `);
                    }

                    takeOrder('customer 1',(customer)=> {
                        processOrder(customer,(customer)=>{
                            completedOrder(customer);
                        });
                    });


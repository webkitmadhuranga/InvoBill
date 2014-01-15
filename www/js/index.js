/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        alert('deviceready')
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');

        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);

        alert( db )
        db.transaction(populateDB, errorCB, successCB);

    },




    // Populate the database
    //
    function populateDB(tx) {
        alert( 'populateDB' )
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (3, "dsad row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (4, "hgfh row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (5, "Sekjhkghcond row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (6, "truryu row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (8, "bvmbnm row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (10, "gdsfgbnvgf row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (11, "zcfswtew row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (12, "ttwert row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (13, "rewtdsfgbnvgf row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (15, "pigdsrwqrfgbnvgf row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (16, "gdsgfhfgbnvgf row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (17, "dsf row")');
    }


    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        alert( 'successCB' )
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }


    // Query the database
    //
    function queryDB(tx) {
        alert( 'queryDB' )
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }



    // Query the success callback
    //
    function querySuccess(tx, results) {
        alert( 'querySuccess' )
        var len = results.rows.length;
        $('#coffee_num').html(len);
        alert( len )
        // console.log("DEMO table: " + len + " rows found.");

        var coffee_list = '';

        for (var i=0; i<len; i++){

            

            coffee_list += '<li><a href="#">'+
                                '<img src="../../_assets/img/album-bb.jpg">'+
                                '<h2>'+ results.rows.item(i).id +'</h2>'+
                                '<p>'+ results.rows.item(i).data +'</p></a>'+
                            '</li>';

            // console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
        }


        $( "#coffee_list_container" ).html( coffee_list );

        $( "#coffee_list_container" ).listview( "refresh" );


    }



};

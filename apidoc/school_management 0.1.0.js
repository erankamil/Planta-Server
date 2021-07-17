/**
 * @api {get} api/v1/schools
 * Schools management page data
 *
 * @apiVersion 0.1.0
 * @apiName Schools management page data
 * @apiGroup School_management
 *
 * @apiDescription Schools management page data  </br>
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "page_data": {
            "schools": {
                "schools": [
                    {
                        "_id": "6076ffcc94dc16d2d80c351e",
                        "name": "בית ספר222 לדוגמא",
                        "city": "1",
                        "district": "1",
                        "type": "1",
                        "size": "1",
                        "orientation": "1",
                        "educational_network": "1",
                        "principle": "menahem@moveo.co.il",
                        "principle_name": " ייייישששששש",
                        "created_at": "2021-04-14T14:44:28.183Z",
                        "updated_at": "2021-04-14T15:06:21.573Z"
                    },
                    {
                        "_id": "6076ebfa3bdb00bd61f8e997",
                        "name": "בית ספר222 לדוגמא",
                        "city": "1",
                        "district": "1",
                        "type": "1",
                        "size": "1",
                        "orientation": "1",
                        "educational_network": "1",
                        "principle": "danielb@moveo.co.il",
                        "principle_name": "יחיאל המנהל",
                        "created_at": "2021-04-14T13:19:54.573Z",
                        "updated_at": "2021-04-14T13:19:54.573Z"
                    },
                    {
                        "_id": "60752992796c0c07e3e8b25d",
                        "name": "בית ספר222 לדוגמא",
                        "city": "1",
                        "district": "1",
                        "type": "1",
                        "size": "1",
                        "orientation": "1",
                        "educational_network": "1",
                        "principle": "danielb@moveo.co.il",
                        "principle_name": "יחיאל המנהל",
                        "created_at": "2021-04-13T05:18:10.132Z",
                        "updated_at": "2021-04-13T05:39:19.439Z"
                    }
                ],
                "count": 32
            },
            "cities": [
                {
                    "name": "אילת",
                    "id": 1
                },
                {
                    "name": "ירושלים",
                    "id": 2
                },
                {
                    "name": "תל אביב",
                    "id": 3
                },
                {
                    "name": "חיפה",
                    "id": 4
                },
                {
                    "name": "ראש העין",
                    "id": 5
                }
            ],
            "school_types": [
                {
                    "name": "יסודי",
                    "id": 1
                },
                {
                    "name": "על יסודי",
                    "id": 2
                },
                {
                    "name": "תיכון",
                    "id": 3
                }
            ],
            "districts": [
                {
                    "name": "צפון",
                    "id": 1
                },
                {
                    "name": "חיפה",
                    "id": 2
                },
                {
                    "name": "מרכז",
                    "id": 3
                },
                {
                    "name": "תל-אביב",
                    "id": 4
                },
                {
                    "name": "ירושלים",
                    "id": 5
                },
                {
                    "name": "דרום",
                    "id": 6
                },
                {
                    "name": "החברה הדרוזית",
                    "id": 7
                },
                {
                    "name": "חרדי",
                    "id": 8
                },
                {
                    "name": "דתי",
                    "id": 9
                }
            ],
            "orientations": [
                {
                    "name": "ללא",
                    "id": 0
                },
                {
                    "name": "ממלכתי-דתי",
                    "id": 1
                }
            ],
            "school_sizes": [
                {
                    "name": "קטן",
                    "id": 1
                },
                {
                    "name": "בינוני",
                    "id": 2
                },
                {
                    "name": "גדול",
                    "id": 3
                }
            ],
            "networks": [
                {
                    "name": "ללא",
                    "id": 0
                },
                {
                    "name": "אורט",
                    "id": 1
                }
            ]
        }
    }
}
*
*/

/**
 * @api {post} api/v1/schools/filter
 * Filter Schools
 *
 * @apiVersion 0.1.0
 * @apiName Filter Schools
 * @apiGroup School_management
 *
 * @apiDescription Filter Schools  </br>
 *
 * @apiParam  {number} skip Pagination skip - Query param (Required)
 * @apiParam  {number} limit Pagination limit - Query param (Required)
 * @apiParam  {[number]} cities cities id's
 * @apiParam  {[number]} school_types school types
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
 {
    "cities": [ 3 ],
    "school_types": [  ]
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "schools": [
            {
                "_id": "60743a59bca19049adf4248e",
                "name": "test 444",
                "city": "3",
                "district": "3",
                "type": "3",
                "size": "3",
                "orientation": "0",
                "educational_network": "1",
                "principle": "danielbktest@moveo.co.il",
                "principle_name": "יחיאל המנהל",
                "created_at": "2021-04-12T12:17:29.844Z",
                "updated_at": "2021-04-12T15:46:53.880Z"
            },
            {
                "_id": "60743a0ebca19049adf4248b",
                "name": "test 444",
                "city": "3",
                "district": "3",
                "type": "3",
                "size": "3",
                "orientation": "0",
                "educational_network": "1",
                "principle": "test5@moveo.co.il",
                "principle_name": "יחיאל המנהל",
                "created_at": "2021-04-12T12:16:14.365Z",
                "updated_at": "2021-04-12T12:16:14.365Z"
            },
            {
                "_id": "6074398f64a2a248acbe8552",
                "name": "test 444",
                "city": "3",
                "district": "3",
                "type": "3",
                "size": "3",
                "orientation": "0",
                "educational_network": "1",
                "principle": "test5@moveo.co.il",
                "principle_name": "יחיאל המנהל",
                "created_at": "2021-04-12T12:14:07.284Z",
                "updated_at": "2021-04-12T12:14:07.284Z"
            },
            {
                "_id": "607437bd71169b46972c5652",
                "name": "test 444",
                "city": "3",
                "district": "3",
                "type": "3",
                "size": "3",
                "orientation": "0",
                "educational_network": "1",
                "created_at": "2021-04-12T12:06:21.274Z",
                "updated_at": "2021-04-12T12:06:21.274Z"
            },
            {
                "_id": "6073175c58d14f910ed0e56d",
                "name": "test 444",
                "city": "3",
                "district": "3",
                "type": "3",
                "size": "3",
                "orientation": "0",
                "educational_network": "1",
                "principle": "test5@moveo.co.il",
                "principle_name": "יחיאל המנהל",
                "created_at": "2021-04-11T15:35:56.110Z",
                "updated_at": "2021-04-11T15:35:56.110Z"
            },
            {
                "_id": "6072f2589bccba66a8e3b057",
                "name": "test33333 school",
                "city": "3",
                "district": "3",
                "type": "3",
                "size": "3",
                "orientation": "0",
                "educational_network": "1",
                "principle": "test5@moveo.co.il",
                "principle_name": "יחיאל המנהל",
                "created_at": "2021-04-11T12:58:00.792Z",
                "updated_at": "2021-04-11T13:42:55.217Z"
            }
        ],
        "count": 6
    }
}
*
*/

/**
 * @api {post} api/v1/schools
 * Create school
 *
 * @apiVersion 0.1.0
 * @apiName Create school
 * @apiGroup School_management
 *
 * @apiDescription Create school  </br>
 *
 * @apiParam  {string} name School's name (Required)
 * @apiParam  {number} city City (Required)
 * @apiParam  {number} district District (Required)
 * @apiParam  {number} type Type (Required)
 * @apiParam  {number} orientation Orientation
 * @apiParam  {number} size School size (Required)
 * @apiParam  {number} educational_network Educational network
 * @apiParam  {object} principle Principle (Required)
 * @apiParam  {string} name Principle's name (Required)
 * @apiParam  {string} email Principle's email (Required)
 * @apiParam  {string} phone_number Principle's phone number (Required)
 * @apiParam  {[object]} roles school roles
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "name": "בית לדוגמא",
    "city": 1,
    "district": 1,
    "type": 1,
    "orientation": 1,
    "size": 1,
    "educational_network": 1,
    "principle": {
        "user":{
            "name": "מנחם",
            "email": "menahem@moveo.co.il",
            "phone_number": "052-3424551"
        }
    },
    "roles": [
        {
            "title": "יועץ",
            "user":{
                "name": "ירון ",
                "email": "meir@moveo.co.il",
                "phone_number": "052-3424551"
            }
        }
    ]
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "school": {
            "_id": "607ade7fcf20cc718c6c6417",
            "name": "בית ספר222 לדוגמא",
            "city": "1",
            "district": "1",
            "type": "1",
            "size": "1",
            "orientation": "1",
            "educational_network": "1",
            "principle": "menahem@moveo.co.il",
            "principle_name": "מנחם",
            "created_at": "2021-04-17T13:11:27.483Z",
            "updated_at": "2021-04-17T13:11:27.483Z"
        }
    }
}
*
*/

/**
 * @api {get} api/v1/schools/:id
 * Get school details
 *
 * @apiVersion 0.1.0
 * @apiName Get school details
 * @apiGroup School_management
 *
 * @apiDescription Get school details  </br>
 *
 * @apiParam  {string} Id school ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "school": {
            "school": {
                "_id": "607ade7fcf20cc718c6c6417",
                "name": "בית ספר222 לדוגמא",
                "city": {
                    "name": "אילת",
                    "id": "1"
                },
                "district": {
                    "name": "צפון",
                    "id": "1"
                },
                "type": {
                    "name": "יסודי",
                    "id": "1"
                },
                "size": {
                    "name": "קטן",
                    "id": "1"
                },
                "orientation": {
                    "name": "ממלכתי-דתי",
                    "id": "1"
                },
                "educational_network": {
                    "name": "אורט",
                    "id": "1"
                },
                "principle": {
                    "title": "מנהל",
                    "role_id": "607ade7fcf20cc718c6c6418",
                    "user": {
                        "email": "menahem@moveo.co.il",
                        "name": " ייייישששששש",
                        "username": "menahem@moveo.co.il",
                        "phone_number": "0523424551"
                    }
                },
                "roles": [
                    {
                        "title": "יועץ",
                        "role_id": "607ade7fcf20cc718c6c6419",
                        "user": {
                            "email": "meir@moveo.co.il",
                            "name": "לונדון ",
                            "username": "meir@moveo.co.il",
                            "phone_number": "0523424551"
                        }
                    }
                ]
            },
            "age_groups": [
                {
                    "age_group": {
                        "_id": "607aded3cf20cc718c6c641b",
                        "age_group": 3,
                        "administrator": {
                            "title": "רכז שכבה",
                            "role_id": "607aded3cf20cc718c6c641a",
                            "user": {
                                "email": "gilad@mail.com",
                                "name": "גשדג גע",
                                "username": "gilad@mail.com",
                                "phone_number": "0523424222"
                            }
                        },
                        "school": "607ade7fcf20cc718c6c6417",
                        "created_at": "2021-04-17T13:12:51.569Z",
                        "updated_at": "2021-04-17T13:12:51.569Z"
                    },
                    "classes": [
                        {
                            "_id": "607adee0cf20cc718c6c641d",
                            "name": "2",
                            "teacher": {
                                "title": "מורה",
                                "role_id": "607adee0cf20cc718c6c641c",
                                "user": {
                                    "email": "danielb@moveo.co.il",
                                    "name": "יחיאל המנהל",
                                    "username": "danielb@moveo.co.il",
                                    "phone_number": "0523424551"
                                }
                            },
                            "school": "607ade7fcf20cc718c6c6417",
                            "age_group": "607aded3cf20cc718c6c641b",
                            "created_at": "2021-04-17T13:13:04.084Z",
                            "updated_at": "2021-04-17T13:13:04.084Z"
                        }
                    ]
                }
            ]
        }
    }
}
*
*/

/**
 * @api {delete} api/v1/schools/:id
 * Delete school
 *
 * @apiVersion 0.1.0
 * @apiName Delete school
 * @apiGroup School_management
 *
 * @apiDescription Delete school  </br>
 *
 * @apiParam  {string} Id school ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isDeleted": {
            "isDeleted": true
        }
    }
}
*
*/

/**
 * @api {patch} api/v1/schools/:Id
 * Update school
 *
 * @apiVersion 0.1.0
 * @apiName Update school
 * @apiGroup School_management
 *
 * @apiDescription Update school </br>
 *
 * @apiParam  {string} Id school ID - URL param (Required)
 * @apiParam  {string} name School's name (Required)
 * @apiParam  {number} city City (Required)
 * @apiParam  {number} district District (Required)
 * @apiParam  {number} type Type (Required)
 * @apiParam  {number} orientation Orientation (Required)
 * @apiParam  {number} size School size (Required)
 * @apiParam  {number} educational_network Educational network (Required)
 * @apiParam  {object} principle Principle (Required)
 * @apiParam  {string} name Principle's name (Required)
 * @apiParam  {string} email Principle's email (Required)
 * @apiParam  {string} phone_number Principle's phone number (Required)
 * @apiParam  {[object]} roles school roles - role with no role_id will be added
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "name": "test school update",
    "city": 2,
    "district": 2,
    "type": 1,
    "orientation":1,
    "size": 2,
    "educational_network": 0,
    "principle": {
        "name": "רונית כהן",
        "email": "ronit@mail.com",
        "phone_number": "052-3424551"
    },
    "roles": [
        {
            "role_id": "6076ffcf94dc16d2d80c3520",
            "title": "ירון",
            "user":{
                "name": "לונדון ",
                "email": "meir@moveo.co.il",
                "phone_number": "052-3424551"
            }
        },
            "title": "יועץ",
            "user":{
                "name": " ייייישששששש",
                "email": "menahem@moveo.co.il",
                "phone_number": "052-3424551"
            }
    ]
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
            "isUpdated": true
    }
}
*
*/

/**
 * @api {post} api/v1/schools/agegroups/:schoolId
 * Create Age groups
 *
 * @apiVersion 0.1.0
 * @apiName Create Age groups
 * @apiGroup School_management
 *
 * @apiDescription Create Age groups </br>
 *
 * @apiParam  {string} schoolId school ID - URL param (Required)
 * @apiParam  {[object]} age_groups age group (Required)
 * @apiParam  {number} age_group age group (Required)
 * @apiParam  {object} administrator administrator details (Required)
 * @apiParam  {string} name Principle's name (Required)
 * @apiParam  {string} email Principle's email (Required)
 * @apiParam  {string} phone_number Principle's phone number (Required)
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "age_groups": [
        {
            "age_group": 7,
            "administrator": {
                    "name": "יואל היועץ",
                    "email": "yoel@mail.com",
                    "phone_number": "052-3424222"
            }
        }
    ]
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "age_groups": [
            {
                "_id": "60659809ad4c821054bd010c",
                "age_group": 8,
                "administrator": "60659809ad4c821054bd010b",
                "school": "605b48aac495784488d9d660",
                "created_at": "2021-04-01T09:53:13.316Z",
                "updated_at": "2021-04-01T09:53:13.316Z"
            }
        ]
    }
}
*
*/

/**
 * @api {patch} api/v1/schools/agegroups/:id
 * Update Age groups
 *
 * @apiVersion 0.1.0
 * @apiName Update Age groups
 * @apiGroup School_management
 *
 * @apiDescription Update Age groups </br>
 *
 * @apiParam  {string} id age group ID - URL param (Required)
 * @apiParam  {number} age_group age group (Required)
 * @apiParam  {object} administrator administrator details (Required)
 * @apiParam  {string} name administrator's name (Required)
 * @apiParam  {string} email administrator's email (Required)
 * @apiParam  {string} phone_number administrator's phone number (Required)
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "age_group": 2,
    "administrator": {
                    "name": "יואל המורה",
                    "email": "yoel@mail.com",
                    "phone_number": "052-3424222"
    }
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isUpdated": true
    }
}
*
*/

/**
 * @api {delete} api/v1/schools/agegroups/:id
 * Delete age group
 *
 * @apiVersion 0.1.0
 * @apiName Delete age group
 * @apiGroup School_management
 *
 * @apiDescription Delete age group  </br>
 *
 * @apiParam  {string} Id age group ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isDeleted": {
            "isDeleted": true
        }
    }
}
*
*/

/**
 * @api {post} api/v1/schools/classes/:schoolId/:ageGroupId
 * Create Classes
 *
 * @apiVersion 0.1.0
 * @apiName Create Classes
 * @apiGroup School_management
 *
 * @apiDescription Create Classes </br>
 *
 * @apiParam  {string} schoolId school ID - URL param (Required)
 * @apiParam  {string} ageGroupId age group ID - URL param (Required)
 *
 * @apiParam  {[object]} classes classes (Required)
 * @apiParam  {string} name class name (Required)
 * @apiParam  {object} teacher teacher details (Required)
 * @apiParam  {string} name Teacher's name (Required)
 * @apiParam  {string} email Teacher's email (Required)
 * @apiParam  {string} phone_number Teacher's phone number (Required)
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "classes": [
        {
            "class": "1",
            "teacher": {
                    "name": "יואל המורה",
                    "email": "yoel@mail.com",
                    "phone_number": "052-3424222"
            }
        }
    ]
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "Classes": [
            {
                "_id": "606192420f93b2134f08a7c9",
                "name": "1",
                "teacher": "606192420f93b2134f08a7c8",
                "school": "605cbceaa3d36ff1644f8a33",
                "age_group": "605cbcf3a3d36ff1644f8a35",
                "created_at": "2021-03-29T08:39:36.839Z",
                "updated_at": "2021-03-29T08:39:36.839Z"
            }
        ]
    }
}
*
*/

/**
 * @api {patch} api/v1/schools/classes/:id
 * Update Class
 *
 * @apiVersion 0.1.0
 * @apiName Update Class
 * @apiGroup School_management
 *
 * @apiDescription Update Class </br>
 *
 * @apiParam  {string} id class ID - URL param (Required)
 * @apiParam  {string} name class name (Required)
 * @apiParam  {object} teacher teacher details (Required)
 * @apiParam  {string} name teacher's name (Required)
 * @apiParam  {string} email teacher's email (Required)
 * @apiParam  {string} phone_number teacher's phone number (Required)
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "class": "My test classs",
    "teacher": {
        "name": "יואל המורה",
        "email": "yoel@mail.com",
        "phone_number": "052-3424222"
    }
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isUpdated": true
    }
}
*
*/

/**
 * @api {delete} api/v1/schools/classes/:id
 * Delete class
 *
 * @apiVersion 0.1.0
 * @apiName Delete class
 * @apiGroup School_management
 *
 * @apiDescription Delete class  </br>
 *
 * @apiParam  {string} Id class ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isDeleted": {
            "isDeleted": true
        }
    }
}
*
*/

/**
 * @api {delete} api/v1/schools/roles/:id
 * Delete school role
 *
 * @apiVersion 0.1.0
 * @apiName Delete school role
 * @apiGroup School_management
 *
 * @apiDescription Delete school role  </br>
 *
 * @apiParam  {string} Id school role ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isDeleted": {
            "isDeleted": true
        }
    }
}
*
*/

/**
 * @api {post} api/v1/schools/roles/:id
 * Replace school role
 *
 * @apiVersion 0.1.0
 * @apiName Replace school role
 * @apiGroup School_management
 *
 * @apiDescription Replace school role </br>
 *
 * @apiParam  {string} Id school ID - URL param (Required)
 * @apiParam  {string} old_role old role id (Required)
 * @apiParam  {string} title role title (Required)
 * @apiParam  {string} name name (Required)
 * @apiParam  {string} email email (Required)
 * @apiParam  {string} phone_number phone_number (Required)
 * @apiParam  {[string]} age_groups related age groups ids
 * @apiParam  {[string]} classes related classes ids
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "old_role":"606db93cdc0d901dc29b8a8d",
    "title": "כשרות ראשי",
    "user":{
        "name": "רבי יצחק",
        "email": "replace22@moveo.co.il",
        "phone_number": "052-3424551",
    },
    "age_groups": [

    ],
    "classes": [

    ]
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isUpdated": true
    }
}
*
*/
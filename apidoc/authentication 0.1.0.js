/**
 * @api {post} api/v1/auth/initpassword
 * Set user initial password
 * 
 * @apiVersion 0.1.0
 * @apiName Init password
 * @apiGroup Authentication
 * 
 * @apiDescription Set user initial password </br>
 * 
 * @apiParam  {string} email user email
 * @apiParam  {string} verification_code verification code sent to user
 * @apiParam  {string} password password
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danbk88@gmail.com",
    "verification_code": "418205",
    "password": "123123123"
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "tokens": {
            "idToken": "eyJraWQiOiJBY3BObDZtYzRHb2ZSODdacFd1cFlJS0s2cjFKTDJ5bCsrZThkMnNXcU9rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfc0d3V2pXRUxOIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIiwiYXVkIjoiNGkwN2dpOTNvN3QyNmFxMHQ1bjd2MmFxOHAiLCJldmVudF9pZCI6ImVkMWNkY2NkLWMxNmQtNDVkNS1hYTZhLWM2MjdmNmZhNjVhOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NzQyODkyLCJuYW1lIjoiINeR157XldeoIiwicGhvbmVfbnVtYmVyIjoiKzk3MjA1MjM0MjQ1NTEiLCJleHAiOjE2MTg3NDY0OTIsImlhdCI6MTYxODc0Mjg5MiwiZW1haWwiOiJkYW5iazg4QGdtYWlsLmNvbSJ9.jlyWsY4_qtXB0bUNAgVbvr3bjST6MBgcNn7aCOOPEhnrK3yXpxjxInWxE4SaNLVlY1dAb5Inf1tM2KnYe6P_uHP5l_NwBWgcVtMYKyfemFiq4YKDOQ-2W1oyQ1HWdvBHEFO8jtqB_Rl_TQypQFEzoz6XET_xUASuUNmpRo0zDCpITeH6rAZ4oacXv_ekfP_0TYEahHBN6-Zy1xHDv0kBGUFtJoh40dlC4FZUt4utrv_Pj6F8qaykWbA7g1xQiyUjux5J4StTYJC4ADY5SVxiIDl0_e4p1d2lOWOgOCS3sjNdfaz14EBaiBeeEQAuqQ0G5xUuitc4vD6osVzrzW1gWA",
            "accessToken": "eyJraWQiOiJRN01hTmlPbTFWcVcyNVlNYkZOT1VIY3RNUUVuRmhYZjJwRDdvTnF3OHNzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJldmVudF9pZCI6ImVkMWNkY2NkLWMxNmQtNDVkNS1hYTZhLWM2MjdmNmZhNjVhOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTg3NDI4OTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NHd1dqV0VMTiIsImV4cCI6MTYxODc0NjQ5MiwiaWF0IjoxNjE4NzQyODkyLCJqdGkiOiJlNWExNjUxNy02YTkzLTRmN2UtOWU4ZS1jNmFjNDFiNDg4ZmIiLCJjbGllbnRfaWQiOiI0aTA3Z2k5M283dDI2YXEwdDVuN3YyYXE4cCIsInVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIn0.ThMnmWDeUEAb2ag78pMTgyvC4EBSArOSisBX5-kVaCCM6AFTc2BWjIK1ApsJ-lfwdIovNjtdh7VXJygoTgu5tInIgIGZVOMA_bOBDFS6m9id9GsV2SLVbCKPnxaqmXY1ruOaQDOpz2L0olTYT3FrP9CEsUdOYnYTC2R8a7xTwOul-qFALThoJ10QXIsTRWfOe0g0Vl9-8iUR31n0yXyrl3J2qyHCCsacptvXjKrNv_VSIXuMWR5A4F-Z6PtQQaJ-RkBbaB8uCDOU8X7IkmFRuKJ0cVCSRhuM9UD_U_uERLMaYgjEVBvnY4yLM5A3I17C29rj_TcBqPavWAJYTjfmGg",
            "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.GqrB9zfXhi0Rhxoxe5dHlzO6FyWVcnwoUpWPMdEz9RIVHzXkrbX9OD7NIqHaNe_JbIdZqFmIWbtQVd4AseO-Fd8Bleh_JS6JTwGZtofXyuRTgR848kcTTkUyzWsuLvXRaogrQk_gwe613H1LVZX8rHkajf7lb4-3C2N9QisLqxHeMfiSV7e7q1Jpy7VQjS3BaNNHU7V3mqvOUPzua-LYPb1JGYIekuJ63GQAuINkOINe4eTfquJJEDpiNOrMQ3BCS8SS4Ty6qABKXNNGNKXnSZhYzwmuvPc1d2IQ0Dg0RnPorL_HPYfxOqx5x_j7Nuas9D9QURoZbX8-iz3LMyyOBQ.vxw9fG8pTroqYQFB.3iogRzb-Csbu-Gltc_UqEWBhHXg9CztaDuWYCeLWhcAkS0dVkm-kePwpj5jZC7FdyaWdQXcB9Nd-_qKExAjzakAZP3vYrDtUiG7Cphk0Fu1uITPoTzH5QonRXI5izUSu4bH3w4Sczy55nzPP5buQih8AM406Gm-oL80UXNz07E2LYJdMy9XfFkSCq697UevZAy0DNk0wANVvVSuTKmbXoBsxnJn-HkBJZ-oe5HSYW2Zdk9xHB5cmnrRfD1T01j744LG_9TkCnS_tRqGHFYMq9QW-JMVlJzI2EI4qb2GL7FC0JA8cLQrJlawEnM3-kkRC7OI4pQ46AZyQta6JGhZgstTSaDNm8oAYFJI6bBZra_47WwMD03IhgH4o1RadAZonwKXfJqka1JeSc9VkmnxahHqUNIrlaKU6B2CYChrkrz-eB4JVrSfzZV0ZALaVK4WsSoTCdvzYr_T9I_zzp9yE4risNDW13qwuOKS6sdkuI0XZPeA4yf-pE5Ca6j9J9YKOknu08k5n-Zm_TKvvQw5p7lZhQkAn2XUvhQ9b_tshMD7spaol1hwu8Cgv9hibKezQkwQZs-1eNNZcuqnzBsP9zX58lRiUubG8GMKIHIiN9nXKWjDbb-P7eXlbskxm6DCwVBDrOcrwqLhzkc3-PBLlEon2IAjPYDMGCCAq8oMOcMNsM9a4O0_b0bKRVifyy20BDSx5a_XbrWirOFlYH9ZV6VAZAhibpZGu6TL3U4ym4X6ISSMqyEhU0yiObP8ok05DJPWsvLURhIqsLqv3qf27KjnW-K3uCMjHVLIPSi8jhG1yurUX3SufL_o-YmhU_qIcPYQCb69Obs74NsxYCSAhUhEbguWIGt-towUyTm3CCzbJ70U8vPCM7turGyp-ciJ6J3pHTLpUJt-_anWu6bCznvHJsy3xDd03f8tuhzoLp8V4p0e_MearmxmEFJToYyS_yiwU-PqfoyvZwcaydzHrrOoIxRT5vl_EhrZAwvEA2w3wptD3_g-llnrpxCpJDliFmqwzYiZPF__U4l51eZ9vnc_QBp6d4amywOTz1EwFOTOyOeVVp1kVbguJ_QlFXpc0T9XDjuFHrMWtDf9VkXaLqMl6zrlCKv89vLqKrKLXVZRdC1MASdfRXgqYk7IS3WMLNwNMTTH5NygmtXuBpZUBhc1QWDn7BKU0xwk8hnEeDuPus7NPxg2HHaG76dIIG-Q4U5AE4DGN-A1E6ws68-6b3e9RLIbxJavPFQ1IsXzzFjqmexgZmr4YLpVuZG3Rxvr5U-0rcAtWCS6WUGsyG72HyxJPCGTsEm609gjkGe2GSt1FcxwhcSCu1r3IXA.4L2m0dHKy3vL7xPhXbDGlg"
        },
        "connectedUser": {
            "email": "danbk88@gmail.com",
            "name": " במור",
            "username": "danbk88@gmail.com",
            "phone_number": "0523424551",
            "cognitoId": "28f7bbaf-a8d1-4e5e-a490-aefcb2bf09bd"
        }
    }
}
* 
*/

/**
 * @api {post} api/v1/auth/signin
 * Sign in user
 * 
 * @apiVersion 0.1.0
 * @apiName Sign in user
 * @apiGroup Authentication
 * 
 * @apiDescription Sign in user </br>
 * 
 * @apiParam  {string} email user email
 * @apiParam  {string} password password
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danielb@moveo.co.il",
    "password": "123123123"
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "tokens": {
            "idToken": "eyJraWQiOiJBY3BObDZtYzRHb2ZSODdacFd1cFlJS0s2cjFKTDJ5bCsrZThkMnNXcU9rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjNGQxMzE1Ny01NjBhLTQ2M2ItOGIzMS05NWE5YWFmZTY3Y2YiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfc0d3V2pXRUxOIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiYzRkMTMxNTctNTYwYS00NjNiLThiMzEtOTVhOWFhZmU2N2NmIiwiYXVkIjoiNGkwN2dpOTNvN3QyNmFxMHQ1bjd2MmFxOHAiLCJldmVudF9pZCI6ImE5MGZmNTkyLWNjZGUtNDFkNi04OGQ0LTdjZDQ3ZDJjZmI0ZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NjY1ODEzLCJuYW1lIjoi15nXl9eZ15DXnCDXlNee16DXlNecIiwicGhvbmVfbnVtYmVyIjoiKzk3MjA1MjM0MjQ1NTEiLCJleHAiOjE2MTg2Njk0MTMsImlhdCI6MTYxODY2NTgxMywiZW1haWwiOiJkYW5pZWxiQG1vdmVvLmNvLmlsIn0.he5BwZCBF7C0E-v3MDFEXDsB5EGmv2_T9aaAowtYvaaAokbqUczAzxZWST3oa2OxKpFxoorkFIFQHZmUvVo0I_nV5SMZQsFKvkqBB4BjC6aXnGt61TZzONXH1Y1_D8vueOdd6XgYqHER5_ep__vors7vyItVTkwLmHV2T_Lo8rMjXNkml3Mqq2UJR2DW6KLH_fDoPXmGdIoznU1RMeZn8olHDTQE9XYG4R1PmknmjuFIQ0C8cVkefdnhG5Nwz5R89iAf1qijlwEeC25Cwp-93Y19w3i8b5jnYQnrSg9YoJ8UUdJAQPMzVz90ODA-TdZL5WF0ulaPEHFSzWPcW7--vw",
            "accessToken": "eyJraWQiOiJRN01hTmlPbTFWcVcyNVlNYkZOT1VIY3RNUUVuRmhYZjJwRDdvTnF3OHNzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjNGQxMzE1Ny01NjBhLTQ2M2ItOGIzMS05NWE5YWFmZTY3Y2YiLCJldmVudF9pZCI6ImE5MGZmNTkyLWNjZGUtNDFkNi04OGQ0LTdjZDQ3ZDJjZmI0ZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTg2NjU4MTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NHd1dqV0VMTiIsImV4cCI6MTYxODY2OTQxMywiaWF0IjoxNjE4NjY1ODEzLCJqdGkiOiJlMzY0OTE3NS04NGQ4LTRjZjUtODIzZi03MmE2MjMyMDBmODciLCJjbGllbnRfaWQiOiI0aTA3Z2k5M283dDI2YXEwdDVuN3YyYXE4cCIsInVzZXJuYW1lIjoiYzRkMTMxNTctNTYwYS00NjNiLThiMzEtOTVhOWFhZmU2N2NmIn0.NN7cW5MrP0NgyUVau2G02ZwBNkdXi8bQDxjttj8JieU0tOyFBirrv2WMQcs8mBweEdY0v_1gPe9yJLd2LVtB-v9mAYyqaQ4JRGWxMA3BUm9UT8_69z5sCw8WPgh655wUrwHjuHD1uAQJkj-LQXDTGwLstolYcQ5r3SuaqT_rVTlZEChEeMLgBeveXX0634ubHDBx7vJ84YInimVaha2xa9691m28rm41G0rzxCozFaiTuUsTbE4c_XCL8xPnt4dGrAqhfpsXoXEVC4LjqPjL2Cm2cK7f43t_bFWTpgLR0-IPeeh15Hx-W_pUVxUj5a8B8uoSMxo2IIi8qsY_zj9dew",
            "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.XASVjuIw5fOUPWE7o-dr26X5X1SDQHuIWl7owyWwHArqd0ZOB8DfdqDp-49BVrPktdEtrsRgelSGGpZkYamZpKZcFTA2SSkZBreIUvXu8PMpPR9AbPG2ICMpIMvq_F5A5GFXVDFGn0YxC9zTLF2puN2bU6wPRvzx517PtrELbBdUd6AIw9birnlW7DpFiGLFJjdRTtKeEqnnkFmYdmHIDy5QhE4_5ZrPWfzQau68u7_j0_qnOG5agYA1eNUj08qE47_jxKXYq4kaC5jXlr6nWwtFCEqen7aHpGHuRc3YkwkP_y85KNtvDnCgZwgA_aVnzQE4uMuR2PVgKlRXJpserA.epfcx9kBHEdcHhv7.5mKqMLCM7Onzr8bmOQOqcZb6Oi31YuaZNyj3Y9FiUBnI_KhzTMzRwrSnUJemll12k-jjuxGr2oH4S9FgTMSAMLUm6aKdrfz12EVemwqxegC5jZeDI_jFzJFWcV4zGYAG7xSuwKM8tMafgM8HCtpcFEF6iR8Ao8xeBRYYnFfeD8hF2x1xsOweci4slSfIIg5H6N0U03InDEEk6gKp-KVYgobF8h7cK5JrUevy7my5dq-cFIgGKZiKGRiUySrfQc0AM-ME-Nsa4IJ4nOsPeS799p-2e1WkzBvtwOb91vOnQX46Symm5qWGpwWiBMnRiz1t_DPnwBghXMN2QHOyByEtCR0NjYbr_vwFLfqadJQJdQbh9Ki3N9ZoCN6fZTKjt7Ih-pICpt2s1HNHdX6iFOwBZUgQithmKe0-W17K1DnbHOL4In42uEoUyPljdCtdy4Xh5slAkDq3t8XCdcLfIETKUm4UJoovz_kZDgVTfI6XevbpBo4uzOHkF-bm3pedSYUqSkXQk147oTUR4SmCBxi09QnWvq1ceTSTe9K9XFpoS0a0D74fJRGticKxrXEEVIb7IsEHINEq0L-GAS_I_5tVSDIhThlqNLCp-pmmbjZVG7u4ITb-45O9BPoVLlu9fV41u2FQckBpTPXE_wQUmlbl0ALxX6tzz7iYymSzexBzf4SrVbkHatC2bEcHGonC615tDkH3P3l0nCsfakgIcBvgLiNHmeAxJW8uYA1dz3vCOAA7dFHHSuCWT-lvNcJ1HRTkAb9YdzIGfwsk6CsIWiq_C-XFjhAaeDLoWe8WkLdzz71kA46Kwc-c0mc3Bhv7HoCgmwv-u1Gn_sGdQi4uCEInK2J707BQcmSoDvJ2oDpbwAdDbRAlTMpsryeESIaYhLgd4fByDfjnyYsHUvW_PwY-OYSV5zzivkXOY-QQN93Ye9_dZ18U96kQGZ4hQSIL7pwJEA-Bc_RRm250sJdbdKt0_Uugpm_1NjT7wi73dnigrCXqfcMlGyS3qiH2Z0cEe18fOiciPTXsRpbSP3KOgopsFqSxzW9aQOy6f4AB7RhnyvYdbLWDgs8M2KRmhKARhVyLGXHoTuqv1uEawiLLgFAj1DVHH2EtCBZB0hkGu2kp9J5osfjc_lcK8KNAYSVyY5YV4jR-PxcYxxPHeFXwQDQ5TTj4EmCnV1wlsGg_qHmpjQjZesYox710PiXP47oDkfx35RhaICq10lO_bO7huDSDExXtwCKtflA1Pen0a91JbKDpFh8MvHlm1i506SQAj3eqGa8QkQxZMYYbODHr0SfEPcr7atQRla76sM8qY8Ufe9rUniz-XrCo5TdG0Q.DrwCbriywUWnwPNRlCO4-A"
        },
        "connectedUser": {
            "email": "danielb@moveo.co.il",
            "name": "יחיאל המנהל",
            "username": "danielb@moveo.co.il",
            "phone_number": "0523424551"
        }
    }
}
* 
*/

/**
 * @api {post} api/v1/auth/resetpassword
 * Reset password
 * 
 * @apiVersion 0.1.0
 * @apiName Reset password
 * @apiGroup Authentication
 * 
 * @apiDescription Reset password    </br>
 * 
 * @apiParam  {string} email user email
 * @apiParam  {string} verification_code verification code sent to user
 * @apiParam  {string} password password
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danbk88@gmail.com",
    "verification_code": "418205",
    "password": "123123123"
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "tokens": {
            "idToken": "eyJraWQiOiJBY3BObDZtYzRHb2ZSODdacFd1cFlJS0s2cjFKTDJ5bCsrZThkMnNXcU9rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfc0d3V2pXRUxOIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIiwiYXVkIjoiNGkwN2dpOTNvN3QyNmFxMHQ1bjd2MmFxOHAiLCJldmVudF9pZCI6IjUwOTVjYjhhLTRkNWYtNGM1YS1hNDQwLTI0MGZkMTI2NGM1ZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NzQzNTkzLCJuYW1lIjoiINeR157XldeoIiwicGhvbmVfbnVtYmVyIjoiKzk3MjA1MjM0MjQ1NTEiLCJleHAiOjE2MTg3NDcxOTMsImlhdCI6MTYxODc0MzU5MywiZW1haWwiOiJkYW5iazg4QGdtYWlsLmNvbSJ9.A6Whxe_nZpaj2SLNuNvHI-T9SIKMFuDI3_aWiazzj7yNZ2xxQO8wKMxgPcFFYfm09Y1RoL6KkqYhSTHD91VSZS2_V29ragnlo9C6g8SVC8WiRYPjrCP7lsvAE_BJeBT3Dse1DvrNqEyVK_eQSRvVIUIWNg0X9lHvRTQWxSeQL4LCQJF8gEg4LNr4V2bytb2NCxmK9FYQmtBzQzWRmlDi2szKtu8HMQ9z8KU2tvSrWxzDbh4kJ5kev1ML5FlKKrpvZlaoh7ovAs2_9ylwXIXuf5EbVRWBQi9TMdd_2lGma6LGi-wJb2yxVVZGO5-XJHgG5VRnBVpAIi4yhGlZelyvag",
            "accessToken": "eyJraWQiOiJRN01hTmlPbTFWcVcyNVlNYkZOT1VIY3RNUUVuRmhYZjJwRDdvTnF3OHNzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJldmVudF9pZCI6IjUwOTVjYjhhLTRkNWYtNGM1YS1hNDQwLTI0MGZkMTI2NGM1ZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTg3NDM1OTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NHd1dqV0VMTiIsImV4cCI6MTYxODc0NzE5MywiaWF0IjoxNjE4NzQzNTkzLCJqdGkiOiJmYTY1ODFhNy00Y2Q5LTQ1YmQtOTUyNS00MDY2NzRhNDY5OWYiLCJjbGllbnRfaWQiOiI0aTA3Z2k5M283dDI2YXEwdDVuN3YyYXE4cCIsInVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIn0.IaPmrtzZDSSJQjRTpPE1bB0CpSXM36ok1aLMIIBQeyTemuur-dI6e-1cuafVXz-1sQNvOtazBI2adHt7Zu5GEuuFI7WCEhAERs7xcOcvyEGV2mOvy1l3H2rEK3XST_c9pr4jEVCpfqMlZt0gy0YYrEcMx3yNqKB-t1BA96LUdmHqb77Qc_p3RN5-TACPsGfHwN0pv43SgNBmlae2efB-XcG_ini24_wmgtvy2ImNEkGhkaY57_cdxCelO1_uEG3ATuVuLVIZHyC8E1zGJDn_MHi6tnGDFl2f_UHcIfwKZusoUx7Dfy7jCXtGOq_DllHvkDXisWvgtKV_IOG3LBxWYg",
            "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CZ4BwwYD6bjqokyCm-8uf3MWBRIB1D0by_c0JXtbrbLUh1d4vQDBieWg4lXyPWkokRIauzAR3IcRaDE5Z2c4QwNyqnNJ3H3V7H614KtbUPoymnSmi7a8aIYORMw--rqoo7zfrtV7-kX1jGPbPIlOYQhXF-wLQvoY4tnNBhK-gPBZ5tAfSQZJ0S1ezaiVhxsgUs7HssZykaFw1Gu6L_mw5CfE86kvT1nYL_gb3lVYbu3LL_lVIWx1gJJh9ML1b8lfJ2HVl-5QQUaQwCbq30XfTzry1M6fgcWpEzTU1S20o_X3Xjz1iHbgKZbDzr_qtEGWxbV3O-OkMJEa1NmRrDvN0A.jCVkrnjScEjBurZu.tJOhJ-kZCoHUSt6YWgqpV102riWR0SPlINCVNejvx7quu3Tvk2TtenGtv74EIXCOwAaGV-OCj9LtO1uE8wa0nbzDABV9dc4t9L4-SQ91sRXX27XJ1a_HWgDW82BGJcyj-JxM8IVdOGcRz1sVDb7_ICHtJQ8lDT6nPTPHIufdbgzKO5miQErq0i-uwdVTHZzfM5AIIeTUPsPmrHlyMVzCZC_Zo-mYWLi0CQVSWHAg2t2qBshtsmD-XTXJ33-KAFxyYDvuuVJH-sCGKM5yPfd2YMRe6TbOGhdBo7g6NXSO2n27E--yHT8RUshuzZtUdjc619X9utd1NotihQAewA_kyhfXw6PyON9-0eABDqJAj6bnlSlDQEIl_qPr6XFGcruE0NclTNteEsZ7sFahQ3gQrguRi6DOlT6EO1BK1ivgrrnf1fk1clj0-tGz-EiMrIOmVidEVSa799uNtNBBkC_Jwlkln2uxsMNlmpuD_UTDwAoprBBRZEQi2GhsrztiNelhrrL1mZG_xvULUku_D5j5oD8NRk9LvfPp5Qtqa58-Rwaiq2-yQ7eaM32U7CqoXCv7W9IpgNdKli6WCkvhBxxNaZ4xsZ1EEiofSrmNYE7TP7-WVXrDWIfqUE9ipfo8LBzug7uCceMhFFrqAIoE0pGITZMXGRCKhwppdq3PuyjaXlhvWrWZXsjvwhAVt9rZkGfFkRi8XCs0KYfUfEYv8vxGAjQUWd8ULOX1s6wgasGMM0pjlfEsfXBqn2iUd6Nx8xZSX6sTaKb-QWzMMRnyC4VZAcRU-X7DANakE0edYSTu9wgrgisdOmb64z__5R-aInRScEhW7cuogBEo8JD6OAGt4A7F5pPFUS9z5aPr-Jcw18Rw6Suz4Oqzr5MPjMhKWw7M6zl2LANavRPTPhe-HkjTFYqDbuwFY4BTwvgw2MjFjZ-WZ6dhHpw4Zd-b_HSbGL_50sla7WGv5rjyVePUTW9xZ-JfBSYpP6OAYRUoRvRlakt6URrciDilhvwRIpm3VLIsxXe1nvN8Iwi7mPLNXDSwswalKGJxK31V7Hz-KG5rwjnLZWJx-cyWhgC6JS4Zy5PqT4S_7Rar1zfblsv-NkQUpMekuYGnXDKhsSXEdgpEjLnRmGjhuCbfch4J2-VscsBcxTB9F47nIwP_XOzZ3puCZf1ZvR0pq8LhXQQ6ceQvqaFiw3-LYyhZK-yJIrsp4ssQboxtUoP-DZD2sPCrnUCsFedal35ixpbia5ScHlNRgR1Me7oaRhxjvTZLQp31zB_Z6W1xHORDong3J_T_jkO1PVEAIGwM0CbKnEUhZuxkgFJ3bbfeB1JfVWN_GA.K0G5u4aL6UFvZuBUIhGLdw"
        },
        "connectedUser": {
            "email": "danbk88@gmail.com",
            "name": " במור",
            "username": "danbk88@gmail.com",
            "phone_number": "0523424551",
            "cognitoId": "28f7bbaf-a8d1-4e5e-a490-aefcb2bf09bd"
        }
    }
}
* 
*/

/**
 * @api {post} api/v1/auth/forgotpassword
 * Forgot password
 * 
 * @apiVersion 0.1.0
 * @apiName Forgot password
 * @apiGroup Authentication
 * 
 * @apiDescription Forgot password - send confirmation code </br>
 * 
 * @apiParam  {string} email user email
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danielb@moveo.co.il",
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isSent": true
    }
}
* 
*/

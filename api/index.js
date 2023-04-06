// Build an apiRouter using express Router
const express = require('express');
const router = express.Router();

// Import the database adapter functions from the db
const { 
    getOpenReports, 
    createReport, 
    closeReport, 
    createReportComment 
} = require('../db/index.js');

/**
 * Set up a GET request for /reports
 * 
 * - it should use an async function
 * - it should await a call to getOpenReports
 * - on success, it should send back an object like { reports: theReports }
 * - on caught error, call next(error)
 */
router.get('/reports', async (req, res, next) => {
    try{
    const reports = await getOpenReports(); 
    res.send({ reports });
    }catch(err){
        next(err);
    }
})


/**
 * Set up a POST request for /reports
 * 
 * - it should use an async function
 * - it should await a call to createReport, passing in the fields from req.body
 * - on success, it should send back the object returned by createReport
 * - on caught error, call next(error)
 */
router.post('/reports', async (req, res, next)=> {
    try{
        const report = await createReport(req.body);
        res.send(report);
    }catch(err){
        next(err);
    }
})


/**
 * Set up a DELETE request for /reports/:reportId
 * 
 * - it should use an async function
 * - it should await a call to closeReport, passing in the reportId from req.params
 *   and the password from req.body
 * - on success, it should send back the object returned by closeReport
 * - on caught error, call next(error)
 */
router.delete('/reports/:reportsId', async (req, res, next) => {
    try{
         const message = await closeReport(req.params.reportsId, req.body.password);
         res.send(message);
    }catch(err){
        next(err);
    }
})


/**
 * Set up a POST request for /reports/:reportId/comments
 * 
 * - it should use an async function
 * - it should await a call to createReportComment, passing in the reportId and
 *   the fields from req.body
 * - on success, it should send back the object returned by createReportComment
 * - on caught error, call next(error)
 */
router.post('/reports/:reportsId/comments', async (req, res, next) => {
    try{
        const result = await createReportComment(req.params.reportsId, req.body);
        res.send(result);
    }catch(err){
        next(err);
    }
})


// Export the apiRouter
module.exports = {
    router
}
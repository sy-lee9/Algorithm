-- 코드를 입력하세요
SELECT
    PT_NAME
    ,PT_NO
    ,GEND_CD
    ,AGE
    ,NVL(TLNO, 'NONE') AS TLNO
FROM PATIENT 
WHERE 1=1
AND GEND_CD = 'W'
AND AGE <= 12
ORDER BY AGE DESC, PT_NAME ASC;
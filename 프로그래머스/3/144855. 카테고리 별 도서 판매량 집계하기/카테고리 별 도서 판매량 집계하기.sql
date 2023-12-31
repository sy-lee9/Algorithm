-- 코드를 입력하세요
SELECT
    CATEGORY
    ,SUM(A.SALES) AS TOTAL_SALES
FROM BOOK_SALES A
LEFT JOIN BOOK B ON A.BOOK_ID = B.BOOK_ID
WHERE TO_CHAR(A.SALES_DATE, 'YYYY-MM') = '2022-01'
GROUP BY B.CATEGORY
ORDER BY B.CATEGORY ASC;
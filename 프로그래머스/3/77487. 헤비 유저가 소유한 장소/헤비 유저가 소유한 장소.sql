-- 코드를 입력하세요
WITH SUB AS(
    SELECT
        A.ID
    FROM PLACES A
    LEFT JOIN PLACES B ON A.HOST_ID = B.HOST_ID
    GROUP BY A.ID
    HAVING COUNT(A.ID) >= 2
    )

SELECT
    P.ID
    ,P.NAME
    ,P.HOST_ID
FROM PLACES P 
INNER JOIN SUB S ON P.ID = S.ID
GROUP BY ID
ORDER BY ID;
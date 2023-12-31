SELECT 
A.REST_ID REST_ID, 
A.REST_NAME REST_NAME, 
A.FOOD_TYPE FOOD_TYPE, 
A.FAVORITES FAVORITES, 
A.ADDRESS ADDRESS, 
ROUND(AVG(B.REVIEW_SCORE),2) SCORE
FROM REST_INFO A RIGHT JOIN REST_REVIEW B
ON A.REST_ID = B.REST_ID
WHERE SUBSTR(A.ADDRESS,1,2) = '서울'
GROUP BY A.REST_ID, A.REST_NAME, A.FOOD_TYPE, A.FAVORITES, A.ADDRESS
ORDER BY SCORE DESC, FAVORITES DESC;
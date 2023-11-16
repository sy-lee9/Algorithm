select pro.member_name, review_text, to_char(review_date, 'YYYY-MM-DD') as REVIEW_DATE
FROM MEMBER_PROFILE PRO
INNER JOIN REST_REVIEW RES
ON PRO.MEMBER_ID = RES.MEMBER_ID
where res.member_id = (SELECT MEMBER_ID
FROM REST_REVIEW RES
GROUP BY MEMBER_ID
order by count(review_id) desc
fetch first 1 rows only)
order by 3,2
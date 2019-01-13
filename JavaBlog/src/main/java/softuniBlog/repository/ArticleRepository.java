package softuniBlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuniBlog.entity.Article;

import java.util.List;
@Repository
public interface ArticleRepository extends JpaRepository<Article,Integer> {

   List<Article> findArticlesByAuthorId(Integer author_id);
}

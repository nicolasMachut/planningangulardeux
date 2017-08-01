package fr.machut.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

/**
 * A TimeSlot.
 */
@Entity
@Table(name = "time_slot")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class TimeSlot implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "opening", nullable = false)
    private Instant opening;

    @NotNull
    @Column(name = "closing", nullable = false)
    private Instant closing;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getOpening() {
        return opening;
    }

    public TimeSlot opening(Instant opening) {
        this.opening = opening;
        return this;
    }

    public void setOpening(Instant opening) {
        this.opening = opening;
    }

    public Instant getClosing() {
        return closing;
    }

    public TimeSlot closing(Instant closing) {
        this.closing = closing;
        return this;
    }

    public void setClosing(Instant closing) {
        this.closing = closing;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeSlot timeSlot = (TimeSlot) o;
        if (timeSlot.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), timeSlot.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TimeSlot{" +
            "id=" + getId() +
            ", opening='" + getOpening() + "'" +
            ", closing='" + getClosing() + "'" +
            "}";
    }
}
